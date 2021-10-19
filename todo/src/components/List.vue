<template>
  <ul class="todo-main">
      <Item v-for="(item,index) in todoList" :key="index" :todo="item"></Item>
  </ul>
</template>

<script>
import Item from './Item.vue';//引入组件
import {inject} from 'vue';
export default {
    name:'List',
    setup(props) {
      const todoList = inject('todoList');//获取provide发布的数据
      return {
        todoList
      }
    },
    components:{ Item },//注册
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