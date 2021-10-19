<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    return {
      todoList: [
        {
          title: "打一场羽毛球",
          finished: true
        },
        {
          title: "打一场篮球",
          finished: true
        }
      ]
    };
  },
  methods: {
    del(index) {
      if (window.confirm("你确定删除吗？")) {
        this.todoList.splice(index, 1);
      }
    },
    add(obj) {
      this.todoList.unshift(obj); //unshift添加到头部,push添加到尾部
    },
    selectAll(isChecked) {
      this.todoList.forEach(item => {
        item.finished = isChecked;
      });
    },
    delFinished(){
      this.todoList = this.todoList.filter((item)=>{//过滤获取一个新的数组
        return !item.finished;
      })
    }
  },
  components: {
    Header,
    List,
    Footer
  }
};
</script>

<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :add="add"></Header>
      <List :todoList="todoList" :del="del"></List>
      <Footer :selectAll="selectAll" :todoList="todoList" delFinished="delFinished"></Footer>
    </div>
  </div>
</template>

<style>
</style>
