// WEB工具
// type：1-百度网盘，2-官网/github，3-迅雷网盘，4-其他
const web = [{
    name: 'burpsuite_pro_1.6',
    describe: '抓包分析等，需要JAVA环境，2099年到期',
    size: '24.4MB',
    download: [{
        link: 'http://pan.baidu.com/s/1slm1fvn',
        sercet: 'yopj',
        type: 1
    }],
    about: [{
        link: 'https://portswigger.net/burp',
        name: '官网'
    }],
    updateTime: '2017-12-28'
}, {
    name: '中国菜刀',
    describe: 'webshell、一句话后门',
    size: '4.9MB',
    download: [{
        link: 'http://pan.baidu.com/s/1kV0QSIV',
        sercet: 'plqr',
        type: 1
    }],
    about: [{
        link: 'http://www.maicaidao.com/',
        name: '官网（已凉）'
    }],
    updateTime: '2017-12-28'
}, {
    name: 'wireshark',
    describe: '多功能网络封包分析',
    size: '约74MB',
    download: [{
        link: 'https://www.wireshark.org/#download',
        sercet: null,
        type: 2
    }],
    about: [{
        link: 'https://www.wireshark.org/',
        name: '官网'
    }],
    updateTime: '2022-07-01'
}, {
    name: 'fiddler2',
    describe: 'HTTP数据包抓取',
    size: '1.2MB',
    download: [{
        link: 'http://pan.baidu.com/s/1bpnAgaz',
        sercet: 's50r',
        type: 1
    }, {
        link: 'https://www.telerik.com/download/fiddler',
        sercet: null,
        type: 2
    }],
    about: [{
        link: 'https://www.telerik.com/fiddler',
        name: '官网'
    }],
    updateTime: '2022-07-01'
}]

export default web