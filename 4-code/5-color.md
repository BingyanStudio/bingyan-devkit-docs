# `ColorUtils` - 颜色工具

`ColorUtils` 提供了一些与颜色有关的工具方法。

## 快速使用

```C#
// 将 #rrggbbaa, #rrggbb, #rgb, #rgba 格式的字符串转为 Color
var color = ColorUtils.FromHex("#FFFFFF");

// 获得一个当前颜色仅修改一个分量后的新颜色值
var red = color.WithR(1);
var green = color.WithG(1);
var blue = color.WithB(1);
var transparent = color.WithA(0);
```