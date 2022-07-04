// 暴力破解
// type：1-百度网盘，2-官网/github，3-迅雷网盘，4-其他
const bruteforce = [{
	name: 'AZPR',
	describe: '对zip暴力破解速度极快，支持明文攻击',
	size: '3MB',
	download: [{
		link: 'https://pan.baidu.com/s/11TWd4q6UtibHOQ-hKnVCNg?pwd=uo0v',
		sercet: null,
		type: 1
	}, {
		link: 'https://pan.xunlei.com/s/VN66rDsB-4oidjw7wLAVPGZIA1',
		sercet: '2g8s',
		type: 3
	}],
	about: [{
		link: 'https://cn.elcomsoft.com/archpr.html',
		name: '官网'
	}],
	updateTime: '2022-07-04'
}, {
	name: 'ARPR',
	describe: '常用RAR爆破工具',
	size: '814KB',
	download: [{
		link: 'http://pan.baidu.com/s/1pK8A9OB',
		sercet: '2h85',
		type: 1
	}],
	about: [{
		link: 'https://cn.elcomsoft.com/archpr.html',
		name: '官网'
	}],
	updateTime: '2016-12-13'
}, {
	name: 'Ziperello',
	describe: '常用zip爆破工具，界面美观，可爆破隐写压缩包',
	size: '985KB',
	download: [{
		link: 'https://pan.baidu.com/s/1l5TsKS6CKtY_HPW2CUKF_w?pwd=dg41',
		sercet: null,
		type: 1
	}, {
		link: 'https://pan.xunlei.com/s/VN66rM-AWPe74_geSwtRBSiYA1',
		sercet: '3b4k',
		type: 3
	}],
	about: [{
		link: 'https://www.ifindpass.com/zip-password-recovery-online/',
		name: '官网'
	}],
	updateTime: '2022-07-04'
}, {
	name: '密码字典生成器',
	describe: '体积小巧，功能强大',
	size: '131KB',
	download: [{
		link: 'http://pan.baidu.com/s/1miGyauc',
		sercet: 'o9hg',
		type: 1
	}],
	about: [{
		link: null,
		name: '佚名'
	}],
	updateTime: '2016-12-13'
}]

export default bruteforce
