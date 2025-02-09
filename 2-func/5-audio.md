# `AudioMap` - 音频管理

`AudioMap` 允许你将项目中的音频资源与音量等配置集中到同一个配置文件中，并便捷地在代码中调用。

## 快速使用

- Assets->Create->DevKit->AudioMap创建一个AudioMapConfig。
- 选中该配置文件，在Inspector面板中点击“编辑”按钮，打开“音频配置”面板。
- 可按照如下方式配置BGM:![编辑窗口](/func/audio/preview.bmp)
- 点击窗口右上角“生成C#代码”，然后就可以通过`AudioMap.BGM.MainMenu.Play()`播放这段音频了！

## 使用方法
