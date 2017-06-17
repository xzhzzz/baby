import * as constants from '../../redux/commonConstant'

export function personal(collection, id){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'personal',
        method: 'post',
        query: {"collection":collection, "id":id}
    }
}