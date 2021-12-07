<template>
	<div class="container">
		<h2>Home组件</h2>
		<ul>
			<li v-for="(item, index) in list" :key="item.pid + index">
				{{ index > 10 ? index : '0' + index }} -- {{ item.title }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			list: [
				{ pid: 1, title: 'HTML' },
				{ pid: 2, title: 'CSS' },
				{ pid: 3, title: 'JavaScript' },
				{ pid: 4, title: 'jQuery' },
				{ pid: 5, title: 'BootStrap' },
				{ pid: 6, title: 'Lodash' },
				{ pid: 7, title: 'Vue' },
				{ pid: 8, title: 'Vue3' },
				{ pid: 9, title: 'TypeScript' },
				{ pid: 10, title: 'React' },
				{ pid: 11, title: 'WebPack' },
			],
		};
	},
};
</script>

<style scoped lang="scss" src="./home.less"></style>
