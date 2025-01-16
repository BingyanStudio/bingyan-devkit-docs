# `AudioUtils` - 音频工具

`AudioUtils` 提供了一些与音频有关的工具方法。


## 快速使用

```C#
// 百分比转分贝
var db = AudioUtils.ValueToDb(0.5);

// 分贝转百分比
var value = AudioUtils.DbToValue(-10);

```