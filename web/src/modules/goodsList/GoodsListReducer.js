import * as types from '../../redux/commonConstant'

export default function(state = {loading:false,text:['全部商品','销售','价格','筛选'],index:0}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.GOODSLIST_SEL:
            reState.active = 'active'
            reState.index=action.index
            break
        case types.REQUEST:
            reState.loading = true
            break
        case types.SUCCESS:
            if(reState.index == "0"){
                reState.goodsdata = action.body
                reState.lastFetched = action.lastFetched
                reState.loading = false
                reState.num+=6
                reState.display=false
                break
            }
            if(reState.index == "1"){
                var data = action.body
                for(var j = 0; j < data.length; j++){
                    for(var i = 0; i < data.length - j; i++) {
                        //防止出现i大于data.length的情况导致报错
                        if(i == data.length - j - 1) {
                            break;
                        }
                        if(Number(data[i].salesNum) < Number(data[i + 1].salesNum)){
                            var temp = data[i]; 
                            data[i] = data[i + 1]; 
                            data[i + 1] = temp;
                        }
                    }
                }
                reState.goodsdata = data
                reState.lastFetched = action.lastFetched
                reState.loading = false
                reState.display=false
                break
            }
            if(reState.index == "2"){
                var data = action.body
                for(var j = 0; j < data.length; j++){
                    for(var i = 0; i < data.length - j; i++) {
                        //防止出现i大于data.length的情况导致报错
                        if(i == data.length - j - 1) {
                            break;
                        }
                        if(Number(data[i].price[0]) < Number(data[i + 1].price[0])){
                            // 创建一个临时变量
                            var temp = data[i]; 
                            data[i] = data[i + 1]; 
                            data[i + 1] = temp; 
                        }
                    }
                }
                reState.goodsdata = data
                reState.lastFetched = action.lastFetched
                reState.loading = false
                reState.display=false
                break
            }
            reState.goodsdata = action.body
            reState.lastFetched = action.lastFetched
            reState.loading = false
            reState.display=false
            break
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false
            break
        default:
            reState.active='none'
            reState.goodsdata=[]
            reState.num=6
            reState.display=false
    }
    return reState;
}