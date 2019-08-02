import JsonP from 'jsonp'
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
}