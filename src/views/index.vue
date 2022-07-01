<template>
	<div class="main">
		<div class="title">CTFTools</div>
		<div class="content">
			<el-tabs v-model="activeName" tab-position="left">
				<el-tab-pane label="首页" name="index">
					<home class="detail"></home>
				</el-tab-pane>
				<el-tab-pane :label="item.label" :name="item.name" v-for="(item,index) in ctftools" :key="index">
					<detail class="detail" :data="item.data" v-if="item.name == activeName"></detail>
				</el-tab-pane>
			</el-tabs>
		</div>
		<div class="foot">
			<div class="beian" @click="toBeian">冀ICP备16028844号</div>
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

			.detail {
				width: 100%;
			}

			width: calc(100% - 40px);
			padding: 20px;

			::v-deep .el-tabs {
				height: calc(100vh - 102px);
			}
		}

		.foot {
			position: absolute;
			bottom: 10px;
			left: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			color: #999;

			.beian {
				cursor: pointer;
			}
		}
	}
</style>
