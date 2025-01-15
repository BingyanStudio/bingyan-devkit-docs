# `CSV` - 表格解析

::: warning 🚧 施工中
本文档仍在施工！  
> 他很新，以至于飞书上也没有同步文档，等俺写一下！
:::

`CSV` 用于处理 `.csv` 格式的表格文件。目前支持将特定格式的表格解析为 C# 对象。

## 快速上手

以下例子演示了将 `.csv` 文件中的数值解析为自定义的 `Person` 对象的过程。

```C#
// 数据模型类
public class Person
{
    [CSV("姓名")] private string name;      // 使用“姓名”一列的值
    [CSV("年龄")] private int age;          // 使用“年龄”一列的值
}

/**
    期望输入的 csv 表格内容：
    姓名,年龄
    张三,18
    李四,19
    王五,20
    ......
 */

// 使用 Unity 的 TextAsset 加载 csv 文件
TextAsset config = Resources.Load<TextAsset>("Config");

// 读取表格中所有的数据，并解析为 Person 对象
List<Person> list = CSV.Parse<Person>(config);

```