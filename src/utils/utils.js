export default {
    pagination(data,callback){
        return {
            onChange:(current)=>{
                callback(current)
            },
            current:data.current,
            pageSize:data.pageSize,
            total:data.total,
            showTotal:()=>{
                return `共${data.total}条`
            },
            showQuickJumper:true
        }
    }
}