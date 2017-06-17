import * as constants from '../../redux/commonConstant'

// export function login(username, password){
//     return {
//         types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
//         path: 'login',
//         method: 'post',
//         query: {username, password}
//     }
// }

export function classify(index){
    return {
        type: constants.CLASSIFY_LEFT,
        index:index
    }
}
export function classifyGetData(classufyId){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showClassifyData',
        method: 'post',
        query: {'collection':'classify','id':classufyId}
    }
}