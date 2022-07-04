// 隐写工具
// type：1-百度网盘，2-官网/github，3-迅雷网盘，4-其他
const steganography = [{
	name: 'HxD',
	describe: '免费的十六进制编辑器和磁盘编辑器',
	size: '3.2MB',
	download: [{
		link: 'https://pan.xunlei.com/s/VN667Tjnt3hq1c-xKERfcTfKA1',
		sercet: 'qgjg',
		type: 3
	}, {
		link: 'https://mh-nexus.de/en/downloads.php?product=HxD20',
		sercet: null,
		type: 2
	}, {
		link: 'https://pan.baidu.com/s/16XBqT2swNhmWYzbDiNFK4A?pwd=wwfe',
		sercet: null,
		type: 1
	}],
	about: [{
		link: 'https://mh-nexus.de/en/hxd/',
		name: '官网'
	}],
	updateTime: '2022-07-04'
}, {
	name: 'Stegsolve',
	describe: '色道隐写，需要JAVA环境',
	size: '304KB',
	download: [{
		link: 'https://pan.xunlei.com/s/VN669LnhKDW7HJdKwYE9VxTGA1',
		sercet: 'wigk',
		type: 3
	}, {
		link: 'http://www.caesum.com/handbook/Stegsolve.jar',
		sercet: null,
		type: 2
	}, {
		link: 'https://pan.baidu.com/s/1uJfgXvS19eoZxTOrBlyHAA?pwd=g82l',
		sercet: null,
		type: 1
	}],
	about: [{
		link: 'https://aur.archlinux.org/packages/stegsolve',
		name: '官网'
	}],
	updateTime: '2022-07-04'
}, {
	name: 'Audacity',
	describe: '免费、开源、跨平台的音频软件',
	size: '33.2MB',
	download: [{
		link: 'https://pan.xunlei.com/s/VN66BN7PLrt53PVBqhXBSAQ2A1',
		sercet: 'fwy4',
		type: 3
	}, {
		link: 'https://www.audacityteam.org/download/',
		sercet: null,
		type: 2
	}, {
		link: 'https://pan.baidu.com/s/1vgnoyfGR6v1ORVpmSwlp-A?pwd=iks0',
		sercet: null,
		type: 1
	}],
	about: [{
		link: 'https://www.audacityteam.org/',
		name: '官网'
	}],
	updateTime: '2022-07-04'
}, {
	name: 'outguess',
	describe: '开源隐写工具，C语言编写',
	size: '约0.5MB',
	download: [{
		link: 'https://github.com/crorvick/outguess',
		sercet: null,
		type: 2
	}],
	about: [{
		link: 'https://github.com/crorvick/outguess',
		name: 'Github'
	}],
	updateTime: '2022-07-04'
}]

export default steganography
