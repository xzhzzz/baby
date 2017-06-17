import * as types from '../../redux/commonConstant'

export default function(state = {loading:false,text:['妈妈专区','奶粉辅食','尿裤湿巾','哺育喂养','洗护用品','宝宝服饰','童车汽座','学习玩具','床椅寝具','收纳外出'],index:0}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.CLASSIFY_LEFT:
            reState.active = 'active'
            reState.index=action.index
            break
        case types.REQUEST:
            reState.loading = true
            break
        case types.SUCCESS:
        reState.data = action.body
        reState.lastFetched = action.lastFetched
        reState.loading = false
        break
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false
            break
        default:
            reState.active='none'
            reState.data=[{content:[]}]
    }
    return reState;
}