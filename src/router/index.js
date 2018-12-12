import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/App'
import TransitionTest from '@/components/TransitionTest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path:'/trans',
      name:'trans',
      componet:TransitionTest
    }
  ]
})
