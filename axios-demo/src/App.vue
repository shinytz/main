<script setup>
  import ajax from './http/index.js'
  // import axios from "axios";

  // axios.defaults.baseURL="http://demo.itlike.com/web/xlmc/api";
  const getReq = () => {
  // axios.get('http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk00188').then((res)=>{
  //   console.log(res.data);
  // }).catch((err)=>{
  //   console.log(err);
  // });

  // axios({
  //   method:'get',
  //   url:'http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk00188'
  // }).then((res)=>{
  //    console.log(res.data);}).catch((err)=>{
  //    console.log(err);
  //  })

  // axios
  //   .get("http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001", {
  //     params: {
  //       id: 'lk001'
  //     }
  //   }).then(res => {
  //     console.log(res.data);
  //   }).catch(err => {
  //     console.log(err);
  //   });

    // axios.post("http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001", {
    //   data: {
    //     id: 'lk001'
    //   }
    // }).then(res => {
    //   console.log(res.data);
    // }).catch(err => {
    //   console.log(err);
    // });
}

  const getAll = ()=>{
    // axios.all([
    //   axios({url:'/homeApi/categoriesdetail/lk001'}),
    //   axios({url:'http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk002'})
    // ]).then((res)=>{
    //   console.log(res.length);
    //   console.log(res[0].data);
    //   console.log(res[1].data);
    // }).catch((err)=>{
    //   console.log(err);
    // });
}

const getReq2 = ()=>{
  ajax('http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001').then((res)=>{
    console.log(res.data);
  }).catch((err)=>{
    console.log(err);
  });
}

//const getAll2 = ()=>{
  // Promise.all([ /*因为不显式使用axios.all()，所以必须使用Promise替换*/
  //        /*get请求method参数可以忽略*/        
  //        ajax("http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001"),
  //        ajax("http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk002")
  //      ]).then((res)=>{
  //        console.log(res);//返回的是数组，可以使用索引
  //      }).catch((error)=>{
  //         console.log(error);
  //      });
  //   }
  //   return {
  //     getAll
  //   };


</script>

<template>
  <div>
    <h2>axios入门</h2>
    <button @click="getReq()">get</button><br/>
    <button @click="getAll()">并发请求</button><br/>

    <button @click="getReq2()">封装请求</button><br/>
    <button @click="getAll2()">封装后并发请求</button><br/>
  </div>
</template>

<style>
</style>
