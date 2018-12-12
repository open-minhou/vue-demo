<!-- 在组件中使用v-model
 1、将其value特性绑定到一个叫value的prop上
 2、在其input事件被触发时，将新的值通过自定义的input事件抛出
-->
<template>
<label>{{label}}
    <input v-bind="$attrs" :value="value" @input="$emit('input',$event.target.value)"/>
</label>
</template>
<script>
export default {
    name:'CustomInput',
    props:['value','label'],
    inheritAttrs:false,
    created(){
        var vm=this;
        return Object.assign({},this.$listeners,{
            input:function(event){
                vm.$emit('input',event.target.value)
            }
        })
    }
}
</script>
