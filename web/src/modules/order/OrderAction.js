import * as constants from '../../redux/commonConstant'
//ajax
export function shopCar(phone){
    //console.log(phone)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'getaccount',
        method: 'post',
        query: {phone}
    }
}

export function address(phone){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'getaddress',
        method: 'post',
        query: {phone}
    }
}