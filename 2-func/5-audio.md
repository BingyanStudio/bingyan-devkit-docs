# `AudioMap` - 音频管理

`AudioMap` 允许你将项目中的音频资源与音量等配置集中到同一个配置文件中，并便捷地在代码中调用。

## 快速使用

- Assets/Create/DevKit/AudioMap，创建一个`AudioMapConfig`。
- 选中该配置文件，在`Inspector`中点击“编辑”按钮，打开“音频配置”窗口。
- 可按照如下方式配置BGM:![编辑窗口](/func/audio/preview.bmp)
- 点击窗口右上角“生成C#代码”，然后就可以通过`AudioMap.BGM.MainMenu.Play()`播放这段音频了！

## 使用方法

### 窗口

- 顶部

  - 可在输入框中指定生成脚本名称，默认值为“AudioMap”。
  - 单击输入框右侧按钮生成C#脚本。
- 左侧

  - 单击“添加组”按钮添加音频组。
  - 单击下拉框中间文字可编辑该音频组名称，按下回车键确认。
  - 单机下拉框右端“删除组”按钮删除该音频组。
  - 单击下拉框左端三角形展开该音频组，其中：
    - “总线”行可设置该音频组的AudioMixerGroup。
    - 单击“+”按钮可添加一个音频信息。
    - 单击“-”按钮可删除这个音频信息。
    - 双击写着音频信息名称的按钮，该按钮将分成左侧的输入框和右侧的“确认”按钮。在输入框中重命名音频信息后，需要先按下回车键，再单击右侧“确认”按钮，才能完成重命名。
    - 单击写着音频信息名称的按钮，可在右侧面板进行编辑。
- 右侧

  - Clips是一个AudioClip数组，播放时将随机选取其中一个。
  - 勾选循环将会自动循环播放这段音频。
  - 音调偏移会使音高在指定范围内浮动。
  - 3D效果决定该音频立体程度；相关功能目前尚待完善。

下图展示了一个可能的配置：![配置示例](/func/audio/example.bmp)

### API

- `AudioSource AudioPlayer.Play(GameObject target)` 根据`AudioPlayer`实例提供的信息播放音频，使AudioSource跟踪`target`物体，返回该AudioSource。
- `AudioSource AudioPlayer.PlaySingleton(GameObject target)` 保证同时仅有一个AudioSource播放该音频。
- `void AudioPlayer.Stop(GameObject target)` 停止播放`target`物体上的此类音频。

::: tip

1. 以上函数均有一个无参重载，指定`AudioManager.Instance`作为`target`物体。
2. 通常来说，`AudioPlayer`实例由AudioMapConfig直接生成即可。

:::
