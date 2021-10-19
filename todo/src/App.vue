<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { reactive,provide } from "vue";

export default {
  name: "App",

  setup(props) {
    let todoList = reactive([//让数组有响应式能力
      {
        title: "打一场羽毛球",
        finished: true
      },
      {
        title: "打一场篮球",
        finished: true
      }
    ]);

    const del = (index) => {
      if (window.confirm("你确定删除吗？")) {
        todoList.splice(index, 1);
      }
    };
    const add = (obj) => {
      todoList.unshift(obj); //unshift添加到头部,push添加到尾部
    };
    const selectAll = (isChecked) => {
      todoList.forEach(item => {
        item.finished = isChecked;
      });
    };
    const delFinished = () => {
      // todoList = todoList.filter((item)=>{//过滤获取一个新的数组
      //   return !item.finished;
      // });

      for(let index=todoList.length-1;index>=0;index--){
        if(todoList[index].finished){
          todoList.splice(index,1);
        }
      }
    }
  //发布数据
    provide('todoList',todoList);
    provide('del',del);
    provide('add',add);
    provide('selectAll',selectAll);
    provide('delFinished',delFinished);
  },

  components: {
    /*实例化组件，然后才能使用 */
    Header,
    List,
    Footer
  }
};
</script>

<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <List></List>
      <Footer></Footer>
    </div>
  </div>
</template>

<style>
</style>
