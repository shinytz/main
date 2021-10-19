//1.引入router相关方法
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import NotFound from '../components/404.vue'
import News from '../components/News.vue'
//2.创建映射关系
const routes = [
    {
        path: '/',
        redirect: '/home'//路由重定向
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/news/:nid',/*动态路由，必须是不变的部分+动态部分*/ 
        component: News
    },
    {
        path:'/:catchAll(.*)',
        component:NotFound
    }
]
//3.创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes//键值名字一样使用简写
});
//4.导出,以便vue中使用
export default router;