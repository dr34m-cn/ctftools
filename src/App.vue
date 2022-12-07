<template>
	<div id="app">
		<index />
	</div>
</template>

<script>
	import index from '@/views/index.vue'

	export default {
		name: 'App',
		components: {
			index
		}
	}
</script>
<style lang="scss">
	::-webkit-scrollbar {
		/*滚动条整体样式*/
		width: 10px;
		/*高宽分别对应横竖滚动条的尺寸*/
		height: 10px;
	}

	::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		// border-radius: 10px;
		background-color: #409eff;
		background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
	}

	::-webkit-scrollbar-track {
		/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 5px rgba(64, 158, 255, 0.4);
		// border-radius: 10px;
		background: #EDEDED;
	}
</style>
