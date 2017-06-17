import * as constants from '../../redux/commonConstant'


// 获取数据
export function index(goods,num){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showData', 
        method: 'post',
        query: {'collection':'goods','page':num}
    }
} 
// export function indexs(id){ 
//     // console.log(id)
//     return {
//         types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
//         path: 'showData', 
//         method: 'post',
//         query: {'id':id}
//     }
// }
// 查询
export function indexxun(id){
    // console.log(id)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showData', 
        method: 'post',
        query: {'collection':'goods','id':id}
    }
}
// 删除
export function indexdel(asd){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showRemove',
        method: 'post',
        query: {'id':asd}
    }
}
// export function index(goods,num){
//     return {
//         types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
//         path: 'goods-Fy',
//         method: 'post',
//         query: {'collection':goods,'num':num}
//     }
// }
