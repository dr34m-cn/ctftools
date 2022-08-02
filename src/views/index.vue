<template>
	<div class="main">
		<div class="title-box">
			<div class="width-area"></div>
			<div class="title">CTFTools</div>
			<div class="width-area">
				<el-button type="danger" size="mini" @click="showDialogBefore">提交/编辑工具</el-button>
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
		<div class="foot">
			<div class="beian" @click="toBeian">冀ICP备16028844号</div>
		</div>
		<el-dialog title="提交/编辑工具" :visible.sync="dialogVisible" width="96%" top="2vw" :before-close="handleClose" :close-on-click-modal="false">
			<div class="btn-box" v-if="submitFalg">
				<el-button @click="submitFalg = !submitFalg">返回继续修改</el-button>
				<el-button type="primary" @click="copyAndGo"> 复制并跳转 Github 编辑 </el-button>
			</div>
			<div class="dialog-area" v-if="!submitFalg">
				<div class="select-box">
					<div>
						工具类型：<el-select v-model="currentType" placeholder="请选择类型" @change="changeType">
							<el-option v-for="item in ctftools" :key="item.name" :label="item.label" :value="item.name"></el-option>
						</el-select>
						<el-button style="margin-left: 20px;" type="primary" v-if="currentType" @click="addTool">添加工具</el-button>
					</div>
					<div>
						<el-popconfirm title="修改不会保存，确定？" @confirm="cancel" v-if="currentType">
							<el-button slot="reference" style="margin-right: 10px;">取 消</el-button>
						</el-popconfirm>
						<el-button v-else @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="submit" v-if="currentType">确 定</el-button>
					</div>
				</div>
				<div class="show-list">
					<div v-for="(item, index) in currentData" class="show-item-box">
						<div class="show-item-header">
							<el-button type="primary" style="margin-right: 20px;" size="mini" @click="editOne(item)">{{item.edit ? '完成' : '编辑'}}
							</el-button>
							<el-button type="danger" size="mini" @click="currentData.splice(index, 1)">删除</el-button>
						</div>
						<div class="show-item">
							<div class="fm-line">
								<div class="fm-item">
									<div class="fm-label">名称</div>
									<div class="fm-value">
										<span v-if="!item.edit">{{item.name}}</span>
										<el-input size="mini" placeholder="请输入工具名称" v-model="item.name" v-else></el-input>
									</div>
								</div>
								<div class="fm-item">
									<div class="fm-label">大小</div>
									<div class="fm-value">
										<span v-if="!item.edit">{{item.size}}</span>
										<el-input size="mini" placeholder="工具大小,带上单位如GB,MB,KB" v-model="item.size" v-else></el-input>
									</div>
								</div>
								<div class="fm-item">
									<div class="fm-label">更新时间</div>
									<div class="fm-value">
										<span v-if="!item.edit">{{item.updateTime}}</span>
										<el-date-picker size="mini" value-format="yyyy-MM-dd" :clearable="false" v-model="item.updateTime" type="date"
											placeholder="选择更新日期" v-else>
										</el-date-picker>
									</div>
								</div>
								<div class="fm-item">
									<div class="fm-label">描述</div>
									<div class="fm-value">
										<span v-if="!item.edit">{{item.describe}}</span>
										<el-input size="mini" placeholder="请输入工具描述" type="textarea" style="width: 980px;max-width: calc(100vw - 300px);"
											:rows="3" v-model="item.describe" v-else></el-input>
									</div>
								</div>
							</div>
							<div class="fm-line">
								<div class="fm-item">
									<div class="fm-label">下载链接</div>
									<div class="fm-value">
										<div class="link-item" v-for="(each, eachIndex) in item.download">
											<div class="fm-line line-item">
												<div class="fm-item">
													<div class="fm-label">链接</div>
													<div class="fm-value">
														<span v-if="!item.edit">{{each.link}}</span>
														<el-input size="mini" placeholder="请输入链接" v-model="each.link" v-else></el-input>
													</div>
												</div>
												<div class="fm-item">
													<div class="fm-label">提取码</div>
													<div class="fm-value">
														<span v-if="!item.edit">{{each.sercet}}</span>
														<el-input size="mini" placeholder="请输入提取码" v-model="each.sercet" v-else></el-input>
													</div>
												</div>
												<div class="fm-item">
													<div class="fm-label">类型</div>
													<div class="fm-value">
														<span v-if="!item.edit">{{getTypeName(each.type)}}</span>
														<el-select v-model="each.type" v-else placeholder="请选择类型" size="mini">
															<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
															</el-option>
														</el-select>
													</div>
												</div>
											</div>
											<i v-if="item.edit" class="el-icon-delete icon" @click="item.download.splice(eachIndex, 1)"></i>
										</div>
										<el-button type="primary" size="mini" @click="addDownload(item)" v-if="item.edit">添加下载链接</el-button>
									</div>
								</div>
							</div>
							<div class="fm-line">
								<div class="fm-item">
									<div class="fm-label">相关链接</div>
									<div class="fm-value">
										<div class="link-item" v-for="(each, eachIndex) in item.about">
											<div class="fm-line line-item">
												<div class="fm-item">
													<div class="fm-label">链接</div>
													<div class="fm-value">
														<span v-if="!item.edit">{{each.link}}</span>
														<el-input size="mini" placeholder="请输入链接" v-model="each.link" v-else></el-input>
													</div>
												</div>
												<div class="fm-item">
													<div class="fm-label">名称</div>
													<div class="fm-value">
														<span v-if="!item.edit">{{each.name}}</span>
														<el-input size="mini" placeholder="请输入名称" v-model="each.name" v-else></el-input>
													</div>
												</div>
											</div>
											<i v-if="item.edit" class="el-icon-delete icon" @click="item.about.splice(eachIndex, 1)"></i>
										</div>
										<el-button type="primary" size="mini" @click="addAbout(item)" v-if="item.edit">添加相关链接</el-button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="commit-box"></div>
				<div class="none-data" v-if="!currentType">
					请选择类型
				</div>
			</div>
			<div v-else>
				<el-input id="contentData" v-model="submitText" type="textarea" autosize></el-input>
			</div>
		</el-dialog>
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
				ctftools,
				dialogVisible: false,
				currentData: [],
				submitFalg: false,
				agreeFlag: false,
				submitText: null,
				currentType: null,
				options: [{
					label: '百度网盘',
					value: 1
				}, {
					label: '官网/github',
					value: 2
				}, {
					label: '迅雷网盘',
					value: 3
				}, {
					label: '其他',
					value: 4
				}]
			};
		},
		created() {},
		methods: {
			toBeian() {
				window.open("http://beian.miit.gov.cn/");
			},
			editOne(item) {
				if (item.edit) {

					item.edit = false;
				} else {
					item.edit = true;
				}
			},
			getTypeName(val) {
				let label = null;
				this.options.forEach(item => {
					if (item.value == val) {
						label = item.label;
					}
				})
				return label;
			},
			submit() {
				let tmpData = JSON.parse(JSON.stringify(this.currentData));
				let flag = 0;
				tmpData.forEach(item => {
					if (item.edit) {
						flag++;
					}
					delete item.edit;
				})
				if (flag > 0) {
					this.$message.error('请确保所有编辑均已完成！');
					return
				}
				let jsonData = JSON.stringify(tmpData, null, "\t");
				let typeName = null;
				this.ctftools.forEach(item => {
					if (this.currentType == item.name) {
						typeName = item.label;
					}
				})
				this.submitText = `// ${typeName}\nconst ${this.currentType} = ${jsonData}\nexport default ${this.currentType}`;
				this.submitFalg = true;
			},
			copyAndGo() {
				let input = document.getElementById('contentData');
				input.select();
				document.execCommand("Copy");
				let jsName = this.currentType;
				setTimeout(function() {
					window.open(`https://github.com/dr34-m/ctftools/blob/main/src/ctftools/inc/${jsName}.js`);
				}, 500);
			},
			showDialogBefore() {
				if (this.agreeFlag) {
					this.showDialog();
				} else {
					const h = this.$createElement;
					this.$alert(h('div', null, [
						h('h3', null, '十分感谢您的贡献，您的贡献可能会为成千上万人带来便利，只需满足以下需求：'),
						h('p', null, '1. 分享精神；'),
						h('p', null, '2. 拥有Github账号&基本的Git知识；'),
						h('p', null, '3. 善良可爱。'),
					]), '须知', {
						confirmButtonText: '没问题',
						showCancelButton: true,
						cancelButtonText: '下次一定',
						callback: action => {
							if (action == 'confirm') {
								this.agreeFlag = true;
								this.showDialog();
							}
						}
					});
				}

			},
			showDialog() {
				this.dialogVisible = true;
				this.submitFalg = false;
				this.currentData = [];
				this.currentType = this.activeName == 'index' ? null : this.activeName;
				if (this.currentType != 'index')
					this.changeType(this.currentType);
			},
			changeType(name) {
				let dt = [];
				this.ctftools.forEach(item => {
					if (item.name == name)
						dt = JSON.parse(JSON.stringify(item.data));
				})
				dt.forEach(item => {
					item.edit = false;
				})
				this.currentData = dt;
			},
			handleClose() {
				this.dialogVisible = false;
			},
			cancel() {
				this.dialogVisible = false;
			},
			addTool() {
				this.currentData.unshift({
					name: null,
					describe: null,
					size: null,
					download: [{
						link: null,
						sercet: null,
						type: null
					}],
					about: [{
						link: null,
						name: null
					}],
					updateTime: this.getNowFormatDate(),
					edit: true
				})
			},
			addDownload(item) {
				item.download.push({
					link: null,
					sercet: null,
					type: null
				})
			},
			addAbout(item) {
				item.about.push({
					link: null,
					name: null
				})
			},
			getNowFormatDate() {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var d = date.getDate();
				if (month < 10) {
					month = "0" + month;
				}
				if (d < 10) {
					d = "0" + d;
				}
				return year + "-" + month + "-" + d;
			}
		}
	};
</script>
<style scoped lang="scss">
	.main {

		.btn-box {
			display: flex;
			justify-content: right;
			margin-bottom: 20px;
		}

		.select-box {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.title-box {
			display: flex;
			color: #FFFFFF;
			background-color: #409EFF;
			height: 71px;
			justify-content: space-between;
			align-items: center;

			.width-area {
				width: 130px;
			}

			.title {
				font-size: 54px;
				font-weight: bold;
			}
		}

		.content {

			.detail {
				width: 100%;
			}

			width: calc(100% - 40px);
			padding: 20px;

			::v-deep .el-tabs {
				height: calc(100vh - 111px);
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

		.dialog-area {
			.select-box {}

			.show-list {
				.show-item-box {
					background-color: #fafafa;
					margin: 10px 0;
					padding: 10px;

					.show-item-header {
						display: flex;
						align-items: center;
						justify-content: right;
						margin-bottom: 10px;
					}

					.show-item {
						padding: 8px 16px 8px 0;
						border: 1px solid #409EFF;
						background-color: #ecf5ff;

						.fm-line {
							display: flex;
							align-items: center;
							flex-wrap: wrap;

							.fm-item {
								display: flex;
								align-items: center;
								margin: 8px 0;

								.fm-label {
									font-weight: bold;
									width: 70px;
									padding-right: 10px;
									text-align: right;
								}

								.fm-value {
									min-width: 220px;
									margin-right: 80px;
								}
							}
						}

						.link-item {
							display: flex;
							align-items: center;

							.line-item {
								width: calc(100vw - 360px);
								margin: 8px 0;
								background-color: #dae2eb;

								.fm-item:nth-child(1) {
									.fm-value {
										min-width: 460px;
									}
								}

								.fm-item:nth-child(2) {
									.fm-value {
										min-width: 80px;
									}
								}

								.fm-item:nth-child(3) {
									.fm-value {
										min-width: 80px;
									}
								}
							}

							.icon {
								font-size: 20px;
								cursor: pointer;
								margin-left: 20px;
							}
						}

					}
				}
			}

			.commit-box {}

			.none-data {
				padding: 20px 0;
				font-size: 20px;
				color: #999;
			}
		}
	}
</style>
