<template>
	<div class="main">
		<div class="title">CTFTools</div>
		<div class="content">
			<el-tabs v-model="activeName" tab-position="left">
				<el-tab-pane label="首页" name="index">
					<home></home>
				</el-tab-pane>
				<el-tab-pane :label="item.label" :name="item.name" v-for="(item,index) in ctftools" :key="index">
					<detail :data="item.data"></detail>
				</el-tab-pane>
			</el-tabs>
		</div>
		<div class="foot">
			<div @click="toBeian">冀ICP备16028844号</div>
			<div class="tips" v-if="activeName != 'index'">
				<div>下载链接类型：</div>
				<el-button type="primary" size="mini">百度网盘</el-button>
				<el-button type="success" size="mini">官网 / Github</el-button>
				<el-button type="warning" size="mini">迅雷网盘</el-button>
				<el-button size="mini">其他</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import detail from '@/views/components/detail.vue';
	import home from '@/views/components/home.vue';
	import ctftools from '@/ctftools/index.js';
	export default {
		components: {
			detail,
			home
		},
		data() {
			return {
				activeName: 'index',
				ctftools
			};
		},
		created() {},
		methods: {
			toBeian() {
				window.open("http://beian.miit.gov.cn/");
			}
		}
	};
</script>
<style scoped lang="scss">
	.main {

		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 62px;
			font-size: 54px;
			font-weight: bold;
			color: #FFFFFF;
			background-color: #409EFF;
		}

		.content {
			width: calc(100% - 40px);
			padding: 20px;

			::v-deep .el-tabs {
				height: calc(100vh - 102px);
			}
		}

		.foot {
			position: absolute;
			bottom: 10px;
			left: 40%;
			height: 28px;
			width: calc(60% - 20px);
			display: flex;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;
			color: #999;

			.tips {
				display: flex;
				align-items: center;
			}
		}

	}
</style>
