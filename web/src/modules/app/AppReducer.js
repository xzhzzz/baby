import * as types from '../../redux/commonConstant'

export default function(
    state = {loading: false,
                data:[],
                count:0
            }
            , action){
    
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.REQUEST:
            reState.loading = true
            break
        case types.SUCCESS:
 
            reState.data = action.body
            // console.log(reState.data.length)
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}