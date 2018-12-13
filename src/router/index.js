import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '@/App'
import Tran from '@/components/TransitionTest'
import TodoList from '@/components/TodoList'
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
      path: '/todo',
      name: 'Todo',
      component: TodoList
    }
  ]
})
