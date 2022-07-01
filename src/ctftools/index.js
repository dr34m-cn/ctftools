import tools from '@/ctftools/inc/tools';
import web from '@/ctftools/inc/web';
// type：1-百度网盘，2-官网/github，3-迅雷网盘，4-其他
const ctftools = [{
	label: '工具合集',
	name: 'tools',
	data: tools
}, {
	label: 'WEB工具',
	name: 'web',
	data: web
}]

export default ctftools
