//随着底层库的改变而改变
import axios from 'axios'
axios.defaults.baseURL = "http://demo.itlike.com/web/xlmc/api"
export default function ajax(url = '', params = {}, type = "GET") {//ES6参数默认值语法
    return new Promise((resolve, reject) => {
        let promise = null;
        if (type.toUpperCase() === 'GET') {
            promise = axios({ url, params });
        } else if (type.toUpperCase() === 'POST') {
            promise = axios({
                method: 'post',
                url,
                data: params
            });
        }
        
        promise.then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject(err);
        });
        
    });
};