# `FSM` - 有限状态机

::: warning 🚧 施工中
本文档仍在施工！  
> 他很新，以至于飞书上也没有同步文档，等俺写一下！
:::

`FSM` 提供一套简单快速的状态机系统，可以更方便地实现主角控制、敌人 AI、游戏状态管理等功能，减少重复劳动。


## 快速使用

以下示例演示了一个双状态的状态机，实现主角的走路和跑步两种状态。

```C#
public class MyComponent : FSM 
{
    // 在这里添加所有的状态
    protected override void DefineStates()
    {
        // 需使用 AddState 方法添加
        // 忘了也没关系，日志会报警告的
        AddState(new WalkState(this));
        AddState(new RunState(this));
    }

    // 这里指定游戏开始后，第一个进入的状态
    protected override Type GetDefaultState() => typeof(WalkState);

    // 使用内部类定义状态，这样可以防止污染命名空间
    private class WalkState : FSMState
    {
        // OnUpdate 和 MonoBehaviour 的 Update 作用一致
        // delta 可以简单认为等于 Time.deltaTime
        public override void OnUpdate(float delta) 
        {
            // 在这里编写 Walk 状态下的逻辑

            if( /* 某个条件，例如按下跑步按钮 */ )
            {
                // 切换到指定类型的状态
                // 当然，这意味着同一个类型的状态只能出现一次
                // 这是 FSM 框架的局限性，后续再进行调整
                Host.ChangeState<RunState>();
            }
        }
    }

    private class RunState : FSMState
    {
        public override void OnUpdate(float delta) 
        {
            // 在这里编写 Run 状态下的逻辑

            if( /* 某个条件，例如跑步按钮松开 */ )
            {
                Host.ChangeState<WalkState>();
            }
        }
    }
}

```

## 使用方法

### 建立状态机

`FSM` 是一个 `MonoBehaivour` 子类，维护当前状态与一个子状态列表。  
当继承 `FSM` 编写自己的状态机逻辑时，你需要首先指定所有可能出现的状态，以及默认（初始）进入的状态。

```C#
public class MyFSM : FSM 
{
    // 在这里添加所有的状态
    protected override void DefineStates()
    {
        // 需使用 AddState 方法添加
        // 忘了也没关系，日志会报警告的
        AddState(new WalkState(this));
        AddState(new RunState(this));
    }

    // 这里指定游戏开始后，第一个进入的状态
    protected override Type GetDefaultState() => typeof(WalkState);
} 
```

`FSM` 所使用的所有状态均需要继承自 `FSMState` 类。  
`FSMState` 维护了其所有者 `FSM` 的引用，同时提供了在进入、退出本状态时的回调，以及一系列与 `Unity` 相关的回调，如 `OnUpdate` 等。

```C#
private class WalkState : FSMState
{
    // OnUpdate 和 MonoBehaviour 的 Update 作用一致
    // delta 可以简单认为等于 Time.deltaTime
    public override void OnUpdate(float delta) 
    {
        // 在这里编写 Walk 状态下的逻辑

        if( /* 某个条件，例如按下跑步按钮 */ )
        {
            // 切换到指定类型的状态
            // 当然，这意味着同一个类型的状态只能出现一次
            // 这是 FSM 框架的局限性，后续再进行调整
            Host.ChangeState<RunState>();
        }
    }
}
```

目前，`FSMState` 提供的回调有
```C#
// 初始化，也可以在构造函数里完成
public virtual void Init() { }

// 进入退出时触发
public virtual void OnEnter() { }
public virtual void OnExit() { }

// Unity 相关事件，这些回调只会在【已进入当前状态】时调用
public virtual void OnUpdate(float delta) { }
public virtual void OnFixedUpdate(float delta) { }
public virtual void OnTriggerEnter2D(Collider2D col) { }
public virtual void OnTriggerStay2D(Collider2D col) { }
public virtual void OnTriggerExit2D(Collider2D col) { }
public virtual void OnColliderEnter2D(Collision2D col) { }
public virtual void OnColliderStay2D(Collision2D col) { }
public virtual void OnColliderExit2D(Collision2D col) { }
public virtual void OnDrawGizmos() { }
public virtual void OnDrawGizmosSelected() { }
```

值得注意的是，`OnUpdate` 与 `OnFixedUpdate` 在参数中提供了时间变化量 `delta`。
`delta` 类似于 `Time.deltaTime` 和 `Time.fixedDeltaTime`，但会受到 `FSM.TimeScale` 影响。

:::tip 
推荐将 `FSMState` 的子类置于 `FSM` 的内部，作为内部类存在。这样可以避免名称类似的状态类型污染命名空间。  
例如，两种不同移动方式的敌人，都可能拥有名为 `MoveState` 的状态类，将其置于对应的 FSM 子类中作为内部类，可以避免命名冲突。
:::

### 状态切换

`FSM` 内部使用一个 `Dictionary<Type, FSMState>` 存储状态，并以 `Type` 为键进行切换。  

```C#
FSM.ChangeState<TState>();
FSM.ChangeState(Type state);
```

值得注意的是，状态切换并不会立即发生，而是延迟到下一帧执行。  
因此，在同一段代码中多次切换状态，在下一帧实际只会切换到最后一个指定的状态。

```C#
public override void OnUpdate(float delta) 
{
    Host.ChangeState<RunState>();

    // 覆盖了前一次切换！前一次将不会发生！
    Host.ChangeState<JumpState>();
}
```

:::warning
由于使用 `Dictionary<Type, FSMState>` 作为状态存储结构，故每种类型的状态仅能存在一个。  
这是在设计时的局限性。
:::

