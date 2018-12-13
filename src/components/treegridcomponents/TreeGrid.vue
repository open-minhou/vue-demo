<template>
    <table>
        <tree-tr :item="item" :columns="columns" primaryKey="id" parentKey="parentId"/>
        <tree-tr  primaryKey="id" parentKey="parentId" v-if="item.hasChild" v-for="d in item.child"
             :key="d.id" :item="d" :columns="columns"/>
    </table>
</template>
<script>

import TreeTr from './TreeTr'

export default {
    data(){
        return {
           item:{
               Name:'abc',
               age:10,
               id:1,
               parentId:0,
               hasChild:true,
               level:0,
               child:[
                  {
                    Name:'def',
                    age:10,
                    id:2,
                    parentId:1,
                    level:1
                  } ,
                  {
                    Name:'fg',
                    age:10,
                    id:3,
                    parentId:1,
                    level:1
                  } 
               ]
           },
           columns: [
               {
                   show:true,
                   Name:'名称',
                   Text:'Name'
               },
               {
                   show:true,
                   Name:'年龄',
                   Text:'age'
               },
               {
                   show:true,
                   Name:'序号',
                   Text:'id'
               }
           ] 
        }
    },
    components:{
        TreeTr
    }
}
</script>

<style>
td{
    text-align: left
}
</style>

