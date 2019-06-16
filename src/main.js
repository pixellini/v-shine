import Vue from 'vue'
import App from './App.vue'
import shine from './shine';

Vue.use(shine);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
