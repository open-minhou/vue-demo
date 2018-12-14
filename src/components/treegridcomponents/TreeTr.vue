<template>
    <div>
        <tr :key="item[primaryKey]" :parent="item[parentKey]">
          <tree-td
            v-for="(column,index) in columns"
            :key="item[column.Name]"
            v-if="column.show"
            :level="item.level"
            v-model="item[column.Text]"
            :isFirst="index===0"
            :hasChild="item.hasChild"
          />
        </tr>
        <tree-tr
          primaryKey="id"
          parentKey="parentId"
          v-if="item.hasChild"
          v-for="d in item.child"
          :key="d.id"
          :item="d"
          :columns="columns"
        />
      </div>
</template>


<script>
import TreeTd from "./TreeTd";

export default {
  name: "TreeTr" /**递归调用一定要有name */,
  props: {
    /**数据 */
    item: {
      type: Object,
      required: true
    },
    columns: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    parentKey: {
      type: String
    },
    primaryKey: {
      type: String
    }
  },
  components: {
    TreeTd
  },
//   render: function(createElement) {
//     createElement("tr", item);
//     if (item.hasChild && item.child.lengt > 0) {
//       for (var child in item.child) createElement("TreeTr", child);
//     }
//   }
  // template:"<tr  :key='item[primaryKey]' :parent='item[parentKey]'><tree-td v-for='(column,index) in columns' :key='item[column.Name]' v-if='column.show'          :level='item.level'         v-model='item[column.Text]' :isFirst='index===0' :hasChild='item.hasChild'/>    </tr>    <tree-tr  primaryKey='id' parentKey='parentId' v-if='item.hasChild' v-for='d in item.child'             :key='d.id' :item='d' :columns='columns'/>"
};
</script>


