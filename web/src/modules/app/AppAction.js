import * as constants from '../../redux/commonConstant'

export function app(key){
   console.log('1223213',key)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
         path: 'app',
        method: 'post',
        query: {'collection':'index','name':key}
    }
}

