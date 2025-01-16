# `IntRange` - 整数范围

::: warning 🚧 施工中
本文档仍在施工！  
> 他很新，以至于飞书上也没有同步文档，等俺写一下！
:::

`IntRange` 表示一个整数范围。它可以方便地在 `Inspector` 中编辑，并用代码进行操作。  


## 快速使用

以下示例演示了 `IntRange` 的使用方法：

```C#
// 在 Inspector 暴露，以编辑范围值
[SerializeField] private IntRange range;

// 当 IntRange 转型为 int 时，将自动取随机数
int rand = range;

// 与上面等效
rand = range.Rand();

// 将一个数字限制在 IntRange 的范围内
int value = range.Clamp(10);
```