# `VectorUtils` - 向量工具

`Bingyan DevKit` 围绕向量提供了一组相当方便的工具。

## 快速使用

```C#
Vector2 vec2 = new Vector2(1, 0);
transform.position += vec2.Vec3();  // 等效于 (Vector3)movement，但写起来更方便
vec2 = transform.position.Vec2();   // 等效于 (Vector2)transform.position

// 获得一个向量仅改变一个分量后的值
vec2 = vec2.SetX(1);
vec2 = vec2.SetY(1);

// Vector3 也有类似的方法，此处不再列举

// 翻转 x 或 y 
vec2 = vec2.FlipX();
vec2 = vec2.FlipY();

// 快捷运算
vec2 = vec2.SetLength(1);       // 方向不变，长度设为 1
vec2 = vec2.LimitLength(1);     // 方向不变，长度限制到 1
vec2 = vec2.Rotate(45);         // 顺时针顺时针旋转 45 度  
vec2 = vec2.Dot(Vector2.up);    // 点积

var vec3 = Vector3.up.Cross(Vector3.left);  // 叉积

// 工具方法
vec2 = VectorUtils.MinLength(vec2, Vector2.one);  // 获得长度较小的向量
vec2 = VectorUtils.MaxLength(vec2, Vector2.one);  // 获得长度较大的向量

```