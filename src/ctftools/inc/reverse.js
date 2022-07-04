// 逆向工具
// type：1-百度网盘，2-官网/github，3-迅雷网盘，4-其他
const reverse = [{
	name: 'IDA_pro_6.8',
	describe: '知名逆向工具',
	size: '176MB',
	download: [{
		link: 'http://pan.baidu.com/s/1nvPPfYx',
		sercet: '14a0',
		type: 1
	}],
	about: [{
		link: 'https://www.hex-rays.com/ida-pro/',
		name: '官网'
	}],
	updateTime: '2016-12-13',
	
	name: 'IDA_pro_7.7', // 工具名称
	describe: '支持Go语言逆向', // 工具描述
	size: '403.5MB', // 工具大小，请带上单位，如KB,MB,GB
	download: [{ // 下载链接，可提供多个
		link: 'https://pan.baidu.com/s/1my_um9h_r2ehJcvMO6cohQ', // 链接地址
		sercet: 'u1s1', // 提取码，没有请置null
		type: 1 // 下载链接类型：1-百度网盘，2-官网/github，3-迅雷网盘，4-其他
	}],
	about: [{ // 相关链接，可提供多个
		link: 'https://www.hex-rays.com/ida-pro/', // 链接，没有可置null
		name: '官网' // 链接名称
	}],
	updateTime: '2022-07-04' // 更新时间
	
}]

export default reverse
