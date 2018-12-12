<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <div :style="{fontSize:postFontSize+'em'}"> <!-- 通过$event获取组件事件抛出的值-->
        <BlogPost v-for="item in items" :post="item" :key="item.id" @enlarge-text="postFontSize+=$event"></BlogPost>
        <CustomInput v-model="Title" class="username-input" placeholder="Enter your username"></CustomInput>
        <label>{{Title}}</label>
        <AlertBox>Something bad.</AlertBox>
    </div>
  </div>
</template>

<script>

import BlogPost from '@/components/BlogPost'
import CustomInput from '@/components/CustomInput' 
import AlertBox from '@/components/AlertBox' 
export default {
  name: 'App',
  data(){
    return {
      msg: 'Test App',
      items:[
        { id: 1, title: 'My journey with Vue',content:'aaa' },
        { id: 2, title: 'Blogging with Vue',content:'bbb' },
        { id: 3, title: 'Why Vue is so fun',content:'ccc' }
      ],
      postFontSize:1,
      Title:''
    }
  },
  components: {
    BlogPost,
    CustomInput,
    AlertBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
