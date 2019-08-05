import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

export default class Axios{
    static jsonp(options){
        return new Promise((resolver,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                if(response.status === 'success'){
                    resolver(response)
                }else{
                    reject(response.message)
                }
            })
        })
    }

    static ajax(options){

        let baseAPI = "https://www.easy-mock.com/mock/5d47d4f3a160b5335055d581/antdMock";

        return new Promise((resolver,reject)=>{
            axios({
                url: options.url,
                method: options.method,
                baseURL: baseAPI,
                timeout: 10000,
                params: (options.data && options.data.params || '')
            }).then((response)=>{
                if(response.status == '200'){

                    let res = response.data.data;

                    console.log(res)

                    if(res.code == 200){
                        resolver(res.result)
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}