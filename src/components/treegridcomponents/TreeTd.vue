<template>
    <td>
        <span v-if="isFirst" v-for="index in level" :key="index">块</span>
        <span v-if="isFirst && hasChild" >c</span>
        <span v-else-if="isFirst">块</span>
        <input type="input" :value="value" v-if="editAble" />
        <span v-else>{{value}}</span>
    </td>
</template>

<script>
export default {
    props:['value','editAble','isFirst','hasChild','level']
}
</script>
