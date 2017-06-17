import login from '../modules/login/LoginReducer'
import {routerReducer as router} from 'react-router-redux'
import index from '../modules/index/indexReducer'
import Add from '../modules/picture/AddReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
	index,
    login,
    Add,
    router
})

export default rootReducer