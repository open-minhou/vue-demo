import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/App'
import Tran from '@/components/TransitionTest'
import TodoList from '@/components/TodoList'
import TreeGrid from '@/components/treegridcomponents/TreeGrid'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path:'/trans',
      name:'trans',
      component:Tran
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/tree',
      name: 'tree',
      component: TreeGrid
    }
  ]
})
