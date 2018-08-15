## install

```bash
npm install vue-lyric-scroll -S
```



## usage

* Local Registration

```vue
// some component
<template>
	<LyricScroll :lyric="lyric" :current-time="currentTime"/>
</template>
<script>
import LyricScroll from 'vue-lyric-scroll'
export default {
    components: {
        LyricScroll
    },
    data: () => ({
        lyric: {0: 'hello', 1: 'world'},
        currentTime: 0
    })
}
//...
</script>
```

* Global Registration

```js
// your entry js
import Vue from 'vue'
import LyricScroll from 'vue-lyric-scroll'
Vue.use(LyricScroll)
//...
```



## Attributes

| 参数 (  Attribute ) | 说明 (  Description  )                           | 类型 ( Type ) | 默认值 ( Default ) | 例子 ( i.e. )            |
| ------------------- | ------------------------------------------------ | ------------- | ------------------ | ------------------------ |
| lyric               | 歌词对象，键是歌词开始时间字符串，值是对应的歌词 | Object        | required           | {0: '你好', 2: '世界'}   |
| currentTime         | 当前的播放时间                                   | Number        | required           | 52                       |
| tLyric              | 翻译的歌词对象                                   | Object        | {}                 | {0: 'hello', 2: 'world'} |
| lyricActiveClass    | 当前唱到的歌词类名                               | String        | ''                 | 'lyric-active'           |
| lyricCenterClass    | 拖拽时中间歌词类名                               | String        | ''                 | 'lyric-center'           |
| lyricScrollTime     | 滚动到目标歌词时间，单位ms                       | Number        | 400                |                          |
| dragendWaitTime     | 拖拽结束后隔多长后恢复滚动，单位ms               | Number        | 3000               |                          |
| lyricMargin         | 每句歌词及翻译与下一句歌词及翻译的间隔           | String        | '20px'             |                          |
| lyricLineheight     | 每句歌词及翻译行高                               | String        | '1.5em'            |                          |
| triangleColor       | 拖拽时左边出现的三角形颜色                       | String        | 'orange'           |                          |
| triangleWidth       | 拖拽时左边出现的三角形宽度                       | String        | '20px'             |                          |
| centerLineColor     | 拖拽时中间线的颜色                               | String        | '#ccc'             |                          |
| centerTimeColor     | 拖拽时中间歌词开始时间颜色                       | String        | 'orange'           |                          |

