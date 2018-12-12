<template>
    <div>
        <button @click="show=!show">
            Toggle
        </button>
        <transition name="fade">
            <p v-if="show">Hello</p>
        </transition>
    </div>
</template>

<script>
export default {
    name:'TransitionTest',
    data(){
        return {
            show:true
        }
    }
}
</script>

<style>
.fade-enter-active,.face-leave-active{
    transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

