<template>
    <tr :key="item[primaryKey]" :parent="item[parentKey]">
        <tree-td v-for="(column,index) in columns" :key="item[column.Name]" v-if="column.show"
          :level="item.level" 
        v-model="item[column.Text]" :isFirst="index===0" :hasChild="item.hasChild"/>
    </tr>
</template>

<script>

import TreeTd from './TreeTd'

export default {
    props:{
        /**数据 */
        item:{
            type:Object,
            required:true
        },
        columns:{
            type:Array,
            required:true,
            default:function(){return[]}
        },
    parentKey:{
        type:String
    },
    primaryKey:{
        type:String
    }
        
    },
    components:{
        TreeTd
    },

}
</script>

