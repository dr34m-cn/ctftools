import tools from '@/ctftools/inc/tools';
import web from '@/ctftools/inc/web';
import pentest from '@/ctftools/inc/pentest';
import steganography from '@/ctftools/inc/steganography';
import reverse from '@/ctftools/inc/reverse';
import bugscan from '@/ctftools/inc/bugscan';
import sqlinjection from '@/ctftools/inc/sqlinjection';
import study from '@/ctftools/inc/study';
import bruteforce from '@/ctftools/inc/bruteforce';
// type：1-百度网盘，2-官网/github，3-迅雷网盘，4-其他
const ctftools = [{
	label: '工具合集',
	name: 'tools',
	data: tools
}, {
	label: 'WEB工具',
	name: 'web',
	data: web
}, {
	label: '渗透环境',
	name: 'pentest',
	data: pentest
}, {
	label: '隐写工具',
	name: 'steganography',
	data: steganography
}, {
	label: '逆向工具',
	name: 'reverse',
	data: reverse
}, {
	label: '漏洞扫描',
	name: 'bugscan',
	data: bugscan
}, {
	label: 'SQL注入',
	name: 'sqlinjection',
	data: sqlinjection
}, {
	label: '学习教程',
	name: 'study',
	data: study
}, {
	label: '暴力破解',
	name: 'bruteforce',
	data: bruteforce
}]

export default ctftools
