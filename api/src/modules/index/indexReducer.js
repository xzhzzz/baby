//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, datas: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../redux/commonConstant'

export default function(state = {loading: false,datas:''}, action){
    // console.log(action)
    let reState = JSON.parse(JSON.stringify(state))
    
    switch(action.type){
        case types.REQUEST:
            reState.loading = true
            reState.datas = action.body
            break
        case types.SUCCESS:
            reState.datas = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.FAILURE:
            reState.datas = action.body
            reState.error = action.error
            reState.loading = false
            break
        default:
    }
    return reState;
}