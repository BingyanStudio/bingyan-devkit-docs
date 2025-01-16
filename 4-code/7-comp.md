# `Component` - 组件工具

`Bingyan DevKit` 提供了一套利用层级关系获取组件的工具。  


## 快速使用

```C#
// 在 MonoBehaviour 中

// 按照 Hierarchy 中的路径获取组件
// 下方的代码将获取到当前物体的 Path 子物体 -> To 子物体 -> Collider 子物体上的 Collider2D 组件
var comp = this.GetComp<Collider2D>("Path/To/Collider");

// 尝试获得组件，如果不存在则返回 false 并 out null
var hasComp = this.TryGetComp<Collider2D>("Path/To/Collider", out comp);

// GetComponentInChildren 的 Try 版本
hasComp = this.TryGetComponentInChildren<Collider2D>(out comp);

// GetComponentInParent 的 Try 版本
hasComp = this.TryGetComponentInParent<Collider2D>(out comp);

// 直接获取位置，等效于 (Vector2) comp.transform.position
var pos = comp.Pos2D();
```