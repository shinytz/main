//1.导入相关方法
import {createStore} from 'vuex'
//2.创建store对象
const store = createStore({
    //共享的数据存放
    //strict:true,//
    
    state:{
        count:10
    },
    //state中的数据需要加工处理
    getters:{

    },
    //同步处理state方法，仅该方法能直接修改state数据
    mutations:{
        INCREMENT(state){
            state.count++;
        },
        DEINCREMENT(state){
            state.count--;
        },
        ASYNINCREMENT(state,num){

            state.count*=num;
        }
    },
    //只能异步或同步间接调用mutations中的方法
    actions:{
        increment({commit}){//commit是固定的方法
            commit('INCREMENT');
        },
        deincrement({commit}){
            commit('DEINCREMENT');
        },
        asynincrement({commit},num){
            
            setTimeout(() => {
                commit('ASYNINCREMENT',num);
            }, 2000);
        }
    }
});
//3.导出，以便main.js中通过use方法使用
export default store;