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
    console.log("vnode: ", vnode)
    el.addEventListener("click", (event)=>{
      if(bin.value && bin.value !== null && bin.value != ""){
        router.push(bin.value);
      }else{
        //Do Nothing, cause ya did it wrong
      }
      
    });
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
