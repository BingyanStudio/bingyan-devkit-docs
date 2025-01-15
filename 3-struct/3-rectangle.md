# `Rectangle` - 矩形范围

::: warning 🚧 施工中
本文档仍在施工！  
> 他很新，以至于飞书上也没有同步文档，等俺写一下！
:::

`Rectangle` 提供了在**场景**中选定矩形范围，并用代码进行交互的功能。


## 快速入门

下方示例演示了 `Rectangle` 的基本使用方法：

```C#
// 在 Inspector 暴露，以选择两个角落
[SerializeField] private Rectangle rect;

// 读取矩形的中心、左下角、右上角
Vector2 center = rect.Center;
Vector2 bottomLeft = rect.BottomLeftCorner;
Vector2 topRight = rect.TopRightCorner;

// 使用 Contains 方法判断点是否在矩形范围内
if(rect.Contains(new Vector2(1f, 2f)))
{
    Debug.Log("点在矩形范围内！");
}
```