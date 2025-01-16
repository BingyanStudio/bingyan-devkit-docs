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