# 安装

本文档将介绍如何将 `Bingyan DevKit` 引入你的项目中。

## 依赖关系
`Bingyan DevKit` 不依赖任何第三方库，需要与 `Unity3D` 项目一起使用即可。  

::: tip
`Bingyan DevKit` 内置了 [`LitJson`](https://github.com/LitJSON/litjson) 库作为 JSON 序列化工具。  
如果你的项目已经使用其他方式引入 `LitJson`，则可以考虑将其移除。
:::

## 引入方式
有两种主要方式可以将 `Bingyan DevKit` 引入项目。

### `git` （推荐）
在项目的任意位置执行 `git clone` 命令，将 `Bingyan DevKit` 克隆到项目中。

如果需要使用最新的稳定版本，则直接克隆即可
```bash
git clone https://github.com/BingyanStudio/BingyanDevKit.git
```

如果需要使用最新的开发版本，则可以克隆 `dev` 分支
```bash
git clone -b dev https://github.com/BingyanStudio/BingyanDevKit.git
```


尽管克隆的具体位置并不重要，但建议放置在 `Assets/Plugins` 文件夹中，方便区分第三方库与项目本体。

------

### UPM（不推荐）
`Bingyan DevKit` 是一个完整的 Unity Package，可以通过 `git` 在 Unity Package Manager 中引入。  

1. 复制仓库的 `git` 地址: https://github.com/BingyanStudio/BingyanDevKit.git
2. 打开 Package Manager 窗口
3. 点击左上角的 `+` 号，选择 `Add package from git URL`
4. 将复制的地址粘贴进去
5. 完成!

::: warning ⚠️ 为什么这种方式不被推荐？  
当项目成员，尤其是**非技术**成员无法稳定访问 [`Github`](https://www.github.com) 时，  
他可能无法通过 `Unity Package Manager` 下载 `Bingyan DevKit` ，从而无法正常运行项目。  
:::

## 下一步

你已经成功地将 `Bingyan DevKit` 引入项目了。  

接下来，你可以查阅左侧导航栏，使用工具优化你的开发体验！