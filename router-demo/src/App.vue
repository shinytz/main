<script setup>
  import router from './router/index.js'
  import {ref} from 'vue'
  const toHome = ()=>{
    router.push('/home');
  }
  const toAbout = ()=>{
    router.push('/about');
  }
  let nid = ref('12345');
  const toNews = ()=>{
    router.push("/news/"+nid.value);
  }
  const toEvent = ()=>{
    router.push({path:'/event',query:{title:'阿富汗新闻',content:'塔利班重新掌握政权'}});
  }
</script>


<template>
  <div>
    <div class="nav">
    <!--
      
      <button @click="toHome()">首页</button>||
      <button @click="toAbout">关于</button>
      -->
      <router-link to="/home">首页页面</router-link>&nbsp;&nbsp;
      <router-link :to="'/news/'+nid">新闻页面</router-link>&nbsp;&nbsp;
      <router-link to="/about" active-class="current">关于我们</router-link>
      
    </div>
    <div class="maincontent">
      <!--展示符合路由规则结果页面-->
      <router-view></router-view>
    </div>
    <div class="footer">
      这是底部版权信息
    </div>
  </div>
  
</template>

<style>
  div{
  text-align: center;
}
  .nav{
    background-color: hotpink;
  }
  .maincontent{
    background-color: lawngreen;
  }
  .footer{
    background-color: lightsalmon;
  }
  .current,.router-link-active{
    font-size: 18px;
    color:red;
    font-weight: bolder;

  }
</style>
