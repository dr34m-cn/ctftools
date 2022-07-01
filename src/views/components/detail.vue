<template>
	<div class="detail">
		<el-table :data="data" style="width: 100%" border stripe>
			<el-table-column type="index" label="序号" align="center" width="60" />
			<el-table-column prop="name" label="名称" align="center" />
			<el-table-column prop="describe" label="简介" align="center" />
			<el-table-column prop="size" label="大小" align="center" width="100" />
			<el-table-column label="下载链接" align="center" width="140">
				<template slot-scope="scope">
					<div v-for="(item,index) in scope.row.download" :key="index" class="downloadArea">
						<el-button :type="item.type==1?'primary':(item.type==2?'success':(item.type==3?'warning':''))" size="mini" @click="onClickCopy(item)">
							点击下载
						</el-button>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="相关链接" align="center" width="100">
				<template slot-scope="scope">
					<div v-for="(item,index) in scope.row.about" :key="index">
						<el-button type="text" size="mini" @click="onClickLink(item.link)" :disabled="!item.link">{{item.name}}
						</el-button>
					</div>
				</template>
			</el-table-column>
			<el-table-column prop="updateTime" label="更新时间" align="center" width="100" />
		</el-table>
		<el-dialog v-if="current" :title="(current.sercet ? '复制提取码完成，':'') + '跳转中...'" :visible.sync="current.visible" width="434px" :before-close="handleClose">
			<div>
				如果<span v-if="current.sercet">复制提取码失败或</span>未能自动跳转链接，请<span v-if="current.sercet">手动复制提取码并</span>点击
				<a :href="current.link" target="_blank"><b>这里</b></a>
				跳转下载页面；
			</div>
			<div style="margin-top: 10px;">
				<span v-if="current.sercet">提取码：<input class="current-input" id="copy" :value="current.sercet"></input>，</span>如有解压密码，均为<b>ctftools</b>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="current = null">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import Clipboard from 'clipboard';
	export default {
		props: ['data'],
		components: {},
		data() {
			return {
				current: null
			};
		},
		created() {},
		methods: {
			onClickCopy(item) {
				item.visible = true;
				this.current = item;
				if (item.sercet) {
					this.$nextTick(function() {
						let input = document.getElementById('copy');
						input.select();
						document.execCommand("Copy");
						setTimeout(function() {
							window.open(item.link);
						}, 3000);
					})
				} else {
					window.open(item.link);
				}
			},
			handleClose() {
				this.current = null;
			},
			onClickLink(val) {
				if (val) {
					window.open(val);
				} else {
					this.$message.info("无链接");
				}
			}
		}
	};
</script>
<style scoped lang="scss">
	.detail {
		width: 100%;
		height: calc(100vh - 130px);
		overflow-y: auto;

		.current-input {
			outline: none;
			width: 48px;
			height: 12px;
			border: 0;
		}

		.downloadArea {
			margin: 4px 0;
		}

		::v-deep .el-table {
			color: #000000;

			tr {
				&:hover {
					td {
						background-color: #ecf5ff !important;
					}
				}
			}

			td.el-table__cell {
				padding: 8px 0;
			}

			.el-table__header-wrapper {
				font-size: 15px;

				th.el-table__cell {
					color: #000000;
					background-color: #DCDFE6;
				}
			}
		}
	}
</style>
