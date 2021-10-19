<template>
  <ul class="todo-main">
      <Item v-for="(item,index) in todoList" :key="index" :todo="item" :delItem="del"></Item>
  </ul>
</template>

<script>
import Item from './Item.vue' //引入组件
export default {
    components:{ Item },//注册
    name:'List',
    props:{//接收父组件传递的数据
        todoList:Array,
        del:Function
    }
}
</script>

<style scoped>
  .todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-left: 10px;
  }
</style>