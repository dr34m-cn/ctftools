# CTFTools源码

### 前端地址在[CTF资源库](https://www.ctftools.com)

由于不能保证足够的时间与精力维护本项目，故本项目纯静态，如希望为本项目提供工具，可按以下格式为`/src/ctftools/inc/`目录下JS文件添加对象，并提交PR，或者您也可以在issues中提出

```js
{
	name: 'xxx', // 工具名称
	describe: 'xxx', // 工具描述
	size: 'xxxMB', // 工具大小，请带上单位，如KB,MB,GB
	download: [{ // 下载链接，可提供多个
		link: 'https://pan.baidu.com/s/xxx', // 链接地址
		sercet: '1111', // 提取码，没有请置null
		type: 1 // 下载链接类型：1-百度网盘，2-官网/github，3-迅雷网盘，4-其他
	}, {
		link: 'https://pan.baidu.com/s/xxx',
		sercet: null,
		type: 2
	}],
	about: [{ // 相关链接，可提供多个
		link: 'https://xxx',
		name: '官网'
	}],
	updateTime: '2012-12-21' // 更新时间
}
```

十分感谢您的贡献，您的贡献可能会为成千上万人带来便利
