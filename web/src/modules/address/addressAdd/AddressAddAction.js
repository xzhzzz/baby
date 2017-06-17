import * as constants from '../../../redux/commonConstant'

export function personal(collection, id){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'personal',
        method: 'post',
        query: {"collection":collection, "id":id}
    }
}

export function address(dataObj){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'updateAccount',
        method: 'post',
        query: dataObj
    }
}
// export function address(dataObj){
//     return {
//         types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
//         path: 'indexData',
//         method: 'post',
//         query: dataObj
//     }
// }