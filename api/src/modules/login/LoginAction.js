import * as constants from '../../redux/commonConstant'

export function login(username, password){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'logins',
        method: 'post',
        query: {username, password}
    }
}

// export function login(username, password){
//     return {
//         type: 'aa'
//     }
// }