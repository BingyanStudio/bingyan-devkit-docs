# `RandomUtils` - 随机工具

`RandomUtils` 提供了一些常用的取随机工具。


## 快速使用

```C#
var array = new string[] { "Hello", "World", "!" };

// 随机取一个元素
var item = RandomUtils.Choose(array);

// 对于 List<T>, 可以使用 GetRand() 拓展方法
var list = new List<string>() { "Hello", "World", "!" };
item = list.GetRand();

// 还可以获取随机元素的下标
item = list.GetRand(out var idx);

```