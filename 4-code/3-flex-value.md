# `FlexValue` - 动画数值

::: warning 🚧 施工中
本文档仍在施工！  
> 他很新，以至于飞书上也没有同步文档，等俺写一下！
:::

`FlexValue` 是一个便于实现代码动画的数值类，其本质是一个**按照固定规则靠近目标的数值**。  
在制作一些**经常被打断的动画**，如 UI 的动效时非常好用。


## 快速使用

以下示例演示了如何使用 `FlexValue` 来实现一个简单的 UI 缩放功能：

```C#
public class ButtonZoom : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    // 定义 FlexValue
    // FlexValue 本身是抽象类，可以在下方创建对象时选择一个合适的具体实现
    // 但是在定义的时候，直接用 FlexValue 即可，他提供了全部的接口
    private FlexValue scaler;

    private void Start()
    {
        // LerpFloat 是 FlexValue 的一个较平滑曲线的实现
        // 除此之外，还有线性的 LinearFloat 可以使用
        // 第一个参数是初始值，第二个参数是变换速度，对于 LerpFloat 而言取 0.01~0.3 效果较好
        scaler = new LerpFloat(1f, 0.1f)
                    .ValueChanged(val => transform.localScale = Vector3.one * val); // 当值更新时执行的操作，这里改变按钮的缩放
    }

    private void Update()
    {
        // FlexValue 需要手动在 Update 或 FixedUpdate 中调用 Update 方法，用于更新值
        scaler.Update(Time.deltaTime); 
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        // 鼠标进入时，将目标值设为 1.2
        // scaler 本身的值将缓慢过渡到 1.2，并在过渡时更新 transform.localScale
        scaler.SetTarget(1.2f); 
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        // 鼠标退出时，将目标值设为 1
        scaler.SetTarget(1f); 
    }
}


```