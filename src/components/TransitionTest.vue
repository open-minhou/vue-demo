<template>
    <div>
        <button @click="show=!show">
            Toggle
        </button>
        <transition name="slide-fade">
            <p v-if="show">Hello</p>
        </transition>
        <div id="example-2">
  <transition name="bounce">
    <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
  </transition>
</div>
    </div>
</template>

<script>
/**混入对象
 * 
 */
var myMixin={
  data(){
    return {
      message:'hello',
      foo:'abc'
    }
  },
  created(){
    console.log('混入对象钩子')
  }
};
export default {
    name:'TransitionTest',
    data(){
        return {
            show:true,
            message:'goodbye',
            bar:'def'
        }
    },
    mixins:[myMixin],
    created(){
      console.log(this.$data)
      console.log('组件钩子')
    }
}
</script>

<style>
* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}


</style>

