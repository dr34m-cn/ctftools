# CTFTools源码

### 前端地址在[CTF资源库](https://www.ctftools.com)

由于不能保证足够的时间与精力维护本项目，同时为了保证安全，本项目纯静态。如希望为本项目提供工具，可按以下格式为`/src/ctftools/inc/`目录下JS文件添加对象，并提交PR；或者您也在前端页面通过点击右上角按钮，以可视化的方式编辑并提交PR。

这可能是你最容易得到的PR机会，希望拿到Github成就的小伙伴别错过，提交PR并通过的朋友会自动出现在下方的贡献者列表中。

**顺便点个Star我会高兴坏的！**

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
		link: 'https://xxx', // 链接，没有可置null
		name: '官网' // 链接名称
	}],
	updateTime: '2012-12-21' // 更新时间
}
```

十分感谢您的贡献，您的贡献可能会为成千上万人带来便利

## 贡献者

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/dr34-m">
            <img src="https://avatars.githubusercontent.com/u/24457750?v=4" width="100;" alt="dr34-m"/>
            <br />
            <sub><b>Dr3@m</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ctftools">
            <img src="https://avatars.githubusercontent.com/u/112684983?v=4" width="100;" alt="ctftools"/>
            <br />
            <sub><b>Ctftools</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/5ime">
            <img src="https://avatars.githubusercontent.com/u/31686695?v=4" width="100;" alt="5ime"/>
            <br />
            <sub><b>I Am I</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/junyu33">
            <img src="https://avatars.githubusercontent.com/u/37526026?v=4" width="100;" alt="junyu33"/>
            <br />
            <sub><b>Junyu33</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->
