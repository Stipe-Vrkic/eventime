import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import VueSmoothScroll from 'vue2-smooth-scroll'
import './assets/css/styles.css'
import Vuelidate from 'vuelidate'

 

Vue.use(Vuelidate)
Vue.use(VueSmoothScroll)


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  
}).$mount('#app')

const user = window.netlifyIdentity.currentUser();
document.getElementById("username").innerHTML=user;


