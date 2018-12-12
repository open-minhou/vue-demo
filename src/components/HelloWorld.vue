<template>
  <div class="hello" id='app'>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      
    </ul>
    <!-- <div :style="{fontSize:postFontSize+'em'}"> 通过$event获取组件事件抛出的值 -->
        <!-- <BlogPost v-for="item in items" :post="item" :key="item.id" @enlarge-text="postFontSize+=$event"></BlogPost>
        <CustomInput v-model="Title"></CustomInput>
        <label>{{Title}}</label> -->
    <!-- </div> -->
  </div>
</template>

<script>

import BlogPost from '@/components/BlogPost'
import CustomInput from '@/components/CustomInput'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Test App',
      items:[
        { id: 1, title: 'My journey with Vue',content:'aaa' },
        { id: 2, title: 'Blogging with Vue',content:'bbb' },
        { id: 3, title: 'Why Vue is so fun',content:'ccc' }
      ],
      postFontSize:1,
      Title:'name'
    }
  },
  components: {
    BlogPost,
    CustomInput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
