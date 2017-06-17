import * as constants from '../../redux/commonConstant'

export function register(nickname,userphone, password){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'register',
        method: 'post',
        query: {nickname,userphone, password}
    }
}