import * as constants from '../../redux/commonConstant'

export function goodsList(index){
    return {
        type: constants.GOODSLIST_SEL,
        index:index
    }
}
export function goodsGetData(index){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showGoodsData',
        method: 'post',
        query: {'collection':'goods'}
    }
}
export function fyGetData(num){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'goods-Fy',
        method: 'post',
        query: {'collection':'goods','num':num}
    }
}
export function search(key){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'goodsSearch',
        method: 'post',
        query: {'collection':'goods','name':key}
    }
}