# `Tween` - 补间

::: warning 🚧 施工中
本文档仍在施工！  
如需使用，可以查阅 https://bingyan.feishu.cn/wiki/RfKmwRnAriQtX4kZmWvcZDtSnpd
:::

<br/>  

`Tween` 是一个非常简单的补间实现，旨在以通用的代码完成一些短程的过渡操作。  

::: tip
`Tween` 适用于通用、规模小-中等的补间用例。  
如果你需要功能更强大的补间，不妨试试 [`DoTween`](https://github.com/Demigiant/dotween)！
:::


## 快速上手

以下示例演示了如何使用 `Tween` 实现淡出效果：

```C#
// 获取物体挂载的 SpriteRenderer 组件，并保存初始颜色
var sprite = GetComponent<SpriteRenderer>();
var originalColor = sprite.color;

var handle = Tween.Linear(0.1f)      // 指定过渡按照线性变化
                .Process(t => sprite.color = Color.Lerp(originalColor, Color.transparent, t))   // 每帧更新，让颜色逐渐变透明
                .Finish(()=> sprite.gameObject.SetActive(false))    // 过渡结束后，将物体隐藏
                .Build()            // 构建 Tween
                .Play();            // 播放 Tween

// 中途出现了特殊情况，需要取消过渡
handle.Stop();
```