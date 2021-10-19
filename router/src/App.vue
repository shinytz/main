<script>
import TabItem from './components/TabItem.vue'
export default{
  components:{
    TabItem:TabItem,
  },
};
</script>

<template>
  <div>
  <router-view></router-view>
  <!--自定义path属性，用于传值.和TabBarItem.vue中props对应-->
   <TabItem path="/home">
    <template v-slot:item-img>
      <img src="./assets/imgs/tabBar/index-selected.svg"/>
    </template>
    <template v-slot:item-title>
      <p>首页内容提示</p>
    </template>
  </TabItem>
   <TabItem path="/course"></TabItem>
   <TabItem path="/friends"></TabItem>
   <TabItem path="/study"></TabItem>
   <TabItem path="/my"></TabItem>
  </div>
</template>

<style>

</style>
