<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checked" />
      <!--绑定计算属性-->
    </label>
    <span>已完成{{finished}}件/总计{{todoList.length}}件</span>
    <button class="btn btn-warning" style="..." @click="del">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    del() {
      if (window.confirm("确定删除吗？")) {
        this.delFinished();
      }
    }
  },
  props: {
    selectAll: Function,
    todoList: Array,
    delFinished: Function
  },
  computed: {
    finished() {
      //获取所有已完成任务的数量
      return this.todoList.filter(item => {
        return item.finished;
      }).length;
    },
    checked: {
      get() {
        //此处初始化调用
        return (
          this.finished === this.todoList.length && this.todoList.length > 0
        );
      },
      set(value) {
        //选中/不选中时调用
        this.selectAll(value);
      }
    }
  }
};
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>