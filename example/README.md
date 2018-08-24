## 快速原型开发
* 前提：需安装vue-cli 3 和 @vue/cli-service-global
```bash
npm install -g @vue/cli
npm install -g @vue/cli-service-global
```

* 运行

```bash
npm run dev
```

## 问题集

### 没有传入t-lyric时无法加载组件
> https://github.com/sluggishpj/vue-lyric-scroll/issues/1

* 问题出在props中的tLyric没有设置默认值，导致其值为undefined，而我在下面的computed中做了`JSON.stringify(this.tLyric) !== '{}'`这个判断。没有注意`JSON.stringify(undefined) !== {}`条件成立
```vue
//...
props: {
    tLyric: Object
    // ...
},
computed: {
	// 包含原词和译词（如果有的话）
    // 格式：[[开始时间, 原词, 译词],...]
    allLyric() {
        let result = []
		// 此处有问题
        if (JSON.stringify(this.tLyric) !== '{}') {
			
        }
        //...
    },
}
//...
```

* 修复，在props中设置tLyric的默认值为null，并在computed判断中判断直接判断 `this.tLyric !== null`

```vue
//...
props: {
    tLyric: {
		type: Object,
        default() {
        	return null
        }
    }
    // ...
},
computed: {
	// 包含原词和译词（如果有的话）
    // 格式：[[开始时间, 原词, 译词],...]
    allLyric() {
        let result = []
		// 修改此处
        if (this.tLyric !== null) {
			
        }
        //...
    },
}
//...
```
