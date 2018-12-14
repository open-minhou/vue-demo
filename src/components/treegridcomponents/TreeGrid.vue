<template>
  <table>
    <tree-tr
      v-for="item in items"
      :key="item.id"
      :item="item"
      :columns="columns"
      primaryKey="id"
      parentKey="parentId"
    />
  </table>
</template>
<script>
import TreeTr from "./TreeTr";

export default {
  data() {
    return {
      items: [
        {
          Name: "abc",
          age: 10,
          id: 1,
          parentId: 0,
          hasChild: true,
          level: 0,
          child: [
            {
              Name: "def",
              age: 10,
              id: 2,
              parentId: 1,
              level: 1,
              child: [
                {
                  Name: "xxx",
                  age: 10,
                  id: 4,
                  parentId: 2,
                  level: 2
                }
              ],
              hasChild: true
            },
            {
              Name: "fg",
              age: 10,
              id: 3,
              parentId: 1,
              level: 1
            }
          ]
        },
        {
          Name: "x1",
          age: 10,
          id: 5,
          parentId: 0,
          hasChild: true,
          level: 0,
          child: [
            {
              Name: "x101",
              age: 10,
              id: 6,
              parentId: 1,
              level: 1,
              child: [
                {
                  Name: "x10101",
                  age: 10,
                  id: 7,
                  parentId: 2,
                  level: 2
                }
              ],
              hasChild: true
            },
            {
              Name: "x102",
              age: 10,
              id: 8,
              parentId: 1,
              level: 1
            }
          ]
        }
      ],
      columns: [
        {
          show: true,
          Name: "名称",
          Text: "Name"
        },
        {
          show: true,
          Name: "年龄",
          Text: "age"
        },
        {
          show: true,
          Name: "序号",
          Text: "id"
        }
      ]
    };
  },
  components: {
    TreeTr
  }
};
</script>

<style>
tbody {
  width: 100%;
}
</style>

