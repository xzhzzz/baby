import * as constants from '../../../redux/commonConstant'

export function addressListAction(collection,id){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'personal',
        method: 'post',
        query: {"collection":collection, "id":id}
    }
}