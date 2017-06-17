import login from '../modules/login/LoginReducer'
import register from '../modules/register/RegisterReducer'
import personal from '../modules/personal/PersonalReducer'
import address from '../modules/address/AddressReducer'
import addressList from '../modules/address/addressList/AddressListReducer'
import addressAdd from '../modules/address/addressAdd/AddressAddReducer'
import detail from '../modules/detail/DetailReducer'
import classify from '../modules/classify/ClassifyReducer'
import goodsList from '../modules/goodsList/GoodsListReducer'
import shopCar from '../modules/shopCar/ShopCarReducer'
import order from '../modules/order/OrderReducer'
import app from '../modules/app/AppReducer'
import {routerReducer as router} from 'react-router-redux'


import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    router,
    app,
    login,
    register,
    personal,
    address,
    addressList,
    addressAdd,
    detail,
    classify,
    goodsList,
    shopCar,
    order
})

export default rootReducer