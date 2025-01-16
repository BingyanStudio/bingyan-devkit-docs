# `FloatRange` - 浮点范围

::: warning 🚧 施工中
本文档仍在施工！  
> 他很新，以至于飞书上也没有同步文档，等俺写一下！
:::

`FloatRange` 表示一个浮点数范围。它可以方便地在 `Inspector` 中编辑，并用代码进行操作。  


## 快速使用

以下示例演示了 `FloatRange` 的使用方法：

```C#
// 在 Inspector 暴露，以编辑范围值
[SerializeField] private FloatRange range;

// 当 FloatRange 转型为 float 时，将自动取随机数
float rand = range;

// 与上面等效
rand = range.Rand();

// 将一个数字限制在 FloatRange 的范围内
float value = range.Clamp(10);

// 使用索引器，访问 FloatRange 在最小值-最大值之间的线性插值
// 以下三行代码是完全等效的
value = range[0.5f];
value = range.Lerp(0.5f);
value = Mathf.Lerp(range.Min, range.Max, 0.5f);
```