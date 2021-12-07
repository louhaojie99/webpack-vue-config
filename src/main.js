import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

// 阻止生产模式的信息
Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	render: (h) => h(App),
});
