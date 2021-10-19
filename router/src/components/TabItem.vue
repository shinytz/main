<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--具名插槽-->
    <slot name="item-img"></slot>
    <slot name="item-title"></slot>
  </div>
</template>

<script>
import {createRouter} from 'vue-router'
export default {
    name:'TabItem',
    props:{
      path:String
    },
    setup(props) {
      const router = createRouter();//获取整个路由对象
      const itemClick = ()=>{
         router.replace(props.path);
      }
      return{
        itemClick
      }
    }
};
</script>

<style>
.tab-bar .tab-bar-item {
  flex: 1; /*均匀分布 */
  height: 49px; /*移动端的下部推荐设计高度 */
  display: flex;
  flex-direction: column; /*纵向布局 */
  justify-items: center; /*主轴居中 */
  align-items: center; /*侧轴居中 */
}
/*图标大小 */
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
</style>