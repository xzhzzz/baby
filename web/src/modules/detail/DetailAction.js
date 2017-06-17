import * as constants from '../../redux/commonConstant'

export function increment(){
    return {
        type:constants.NUMINCREMENT
    }
}

export function decrement(){
    return {
        type:constants.NUMDECREMENT
    }
}

export function getInfo(id){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'personal',
        method: 'post',
        query: {"collection":"goods", "id":id}
    }
}


export function addUsershop(shopObj){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'indexData',
        method: 'post',
        query: shopObj
    }
}