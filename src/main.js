import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import './plugins/font-awesome'
import './assets/helper.css'
import './assets/element-plus.css'

Vue.config.productionTip = false;

Vue.directive('to', {
  // When the bound element is inserted into the DOM...
  inserted: function (el, bin, vnode) {
    el.tabindex="1";
    el.addEventListener("click", (event)=>{
      try{
        router.push(bin.value);
      }catch(error){
        console.group("v-to");
        console.log(error);
        console.groupEnd("v-to");
      }
    });
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
