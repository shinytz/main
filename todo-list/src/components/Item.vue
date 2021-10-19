<template>
  <li @mouseenter="change(true)" @mouseleave="change(false)">
    <label>
      <input type="checkbox" v-model="todo.finished" />
      <span>{{todo.title}}</span>
    </label>
    &nbsp;
    <button class="btn btn-warning" v-show="isShow" @click="delItem('{{todo.index}}')">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    change(show) {
      this.isShow = show;
    }
  },
  props: {
    todo: Object,
    delItem: Function
  }
};
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;

  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>