import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';

/* Component */
import ComponentClient from './components/Client.vue'
import ComponentListClient from './components/ListClient.vue'
import ComponentCreateClient from './components/CreateClient.vue'

Vue.use(BootstrapVue);  
Vue.use(VueRouter);  


import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'



const routes = [
  { 
  path: '/client', 
  component: ComponentClient,
  children:[
    {
      path:'/',
      component:ComponentListClient,
      name:'list'
    },
    {
      path:'create',
      component:ComponentCreateClient,
      name:'create'
    }
  ]
}, 
]
const router = new VueRouter({
  routes
})

 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
