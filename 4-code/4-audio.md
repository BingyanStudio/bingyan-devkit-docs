# `AudioUtils` - 音量工具

`AudioUtils` 提供了一些与音量控制有关的工具方法。


## 快速使用
```C#
// 百分比转分贝
var db = AudioUtils.ValueToDb(0.5);

// 分贝转百分比
var value = AudioUtils.DbToValue(-10);

```