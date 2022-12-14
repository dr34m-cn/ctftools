<template>
	<div class="main">
		<div class="title-box">
			<div class="width-area">
			</div>
			<div class="title">CTFTools</div>
			<div class="width-area">
				<el-button type="warning" size="mini" @click="goTo()">切换至国{{showBeian ? '际' : '内'}}镜像</el-button>
				<el-button type="danger" size="mini" @click="showEdit">提交/编辑工具</el-button>
			</div>
		</div>
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
		<div class="foot" v-if="showBeian">
			<div class="beian" @click="toBeian">冀ICP备16028844号</div>
		</div>
		<edit ref="edit" :activeName="activeName"></edit>
	</div>
</template>

<script>
	import detail from '@/views/components/detail.vue';
	import home from '@/views/components/home.vue';
	import edit from '@/views/components/edit.vue';
	import ctftools from '@/ctftools/index.js';
	export default {
		components: {
			detail,
			home,
			edit
		},
		data() {
			return {
				activeName: 'index',
				ctftools,
				showBeian: true
			};
		},
		created() {
			this.showBeian = window.location.host == 'www.ctftools.com';
		},
		methods: {
			toBeian() {
				window.open("http://beian.miit.gov.cn/");
			},
			goTo() {
				let url = 'https://www.ctftools.com/';
				if(this.showBeian) {
					url = 'https://ctftools.github.io/';
				}
				window.location = url;
			},
			showEdit() {
				this.$refs.edit.showDialogBefore();
			}
		}
	};
</script>
<style scoped lang="scss">
	.main {

		.title-box {
			display: flex;
			color: #FFFFFF;
			background-color: #409EFF;
			height: 71px;
			justify-content: space-between;
			align-items: center;

			.width-area {
				display: flex;
				align-items: center;
				width: 256px;
			}

			.title {
				font-size: 54px;
				font-weight: bold;
			}
		}

		.content {
			width: calc(100% - 40px);
			padding: 20px;

			.detail {
				width: 100%;
				overflow-y: auto;
			}

			::v-deep .el-tabs,
			.detail {
				height: calc(100vh - 111px);
			}
		}

		.foot {
			position: absolute;
			bottom: 0px;
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
