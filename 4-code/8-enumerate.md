# `IEnumerate` - 迭代器工具

`Bingyan DevKit` 提供了一套更方便地遍历迭代器的工具。


## 快速使用

```C#
// 有下标的 List
var list = new List<string>() { "Hello", "World" };

// 无下标的 HashSet
var set = new HashSet<string>() { "Hello", "World" };

// ForEach, 但现在非 List 的迭代器也能用了
set.ForEach(s => Debug.Log(s));

// 对于有下标的迭代器，可以带下标进行遍历了
list.ForEachIndex((index, s) => Debug.Log($"{index}: {s}"));
```
