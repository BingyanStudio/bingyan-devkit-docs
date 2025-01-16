# `Flow` - 执行流程

::: warning 🚧 施工中
本文档仍在施工！  
> 他很新，以至于飞书上也没有同步文档，等俺写一下！
:::

<br/>  

`Flow` 是一个用于控制流程的类，它允许你将多个操作按顺序执行，并在操作之间进行等待。

::: tip
`Flow` 适用于**不愿意使用异步**，且需求较为简单的用例。  
如果你需要功能更强大的流程控制或异步支持，不妨试试 [`UniTask`](https://github.com/Cysharp/UniTask)！
:::


## 快速使用

以下例子演示了如何使用 `Flow` 进行简单的流程控制。

```C#
Flow.Create()   // 创建 Flow
    .Then(() => Debug.Log("开始执行"))  // 使用 Then 添加一个序列执行的流程
    .Then(h => 
    {
        if(float.TryParse("我不是数字", out var value)) 
            h.Continue();                           // 执行完毕，使用 h.Continue() 继续    
        else 
            h.Except(new Exception("不是数字"));      // 出现问题，使用 h.Except(e) 抛出异常
    })
    .Then(Tween.Linear(3).Process(t=> Debug.Log($"当前进度: {t}"))) // 等待一个 Tween 执行完毕
    .Delay(1)   // 直接延迟 1 秒
    .Then(() => Debug.Log("执行完毕"))
    .Run();
```