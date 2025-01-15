# `FloatCurve` - 浮点曲线

::: warning 🚧 施工中
本文档仍在施工！  
> 他很新，以至于飞书上也没有同步文档，等俺写一下！
:::

`FloatCurve` 允许你在 `Inspector` 中创建一个浮点数曲线（或直线）并对其采样。  
这有点类似于 `ParticleSystem` 中，可以调整模式的数值。


## 快速上手

下方示例演示了 `FloatCurve` 的典型使用方法：

```C#
// 在 Inspector 中暴露
[SerializeField] private FloatCurve curve;

// 采样，输入的参数应当在 0-1 之间
var sample = curve[0.1f];

```