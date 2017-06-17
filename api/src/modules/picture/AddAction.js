import * as constants from '../../redux/commonConstant'
import "../../../libs/jquery/jquery.form"
// 添加
export function Add(id,Tablename, name,salesNum,agioTitle,imgUrl,price,specification,parameter,imgFooter,produce){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showAdd',
        method: 'post',
        query: {id:id,collection:'goods', name:name,salesNum:salesNum,agioTitle:agioTitle,imgUrl:imgUrl,price:price,specification:specification,parameter:parameter,imgFooter:imgFooter,produce:produce}
    }
}
// 查询
export function indexxun(id){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showData', 
        method: 'post',
        query: {'collection':'goods','id':id}
    }
}
// 上传图片
// export function upload(){
//     // console.log(id) 
//     return {
//         types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
//         path: 'upload', 
//         method: 'post',
//         // query: {'collection':'goods','id':id}
//     }
// }

