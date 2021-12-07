<template>
	<div class="container">
		<div class="header-nav">
			<router-link to="/">首页</router-link>
			|
			<router-link to="/about">关于我</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style lang="less" scoped>
.container {
	font-size: 20px;
	font-family: '宋体';

	.header-nav {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
