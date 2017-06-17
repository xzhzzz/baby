import * as constants from '../../redux/commonConstant'

export function login(userphone, password){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'login',
        method: 'post',
        query: {userphone, password}
    }
}