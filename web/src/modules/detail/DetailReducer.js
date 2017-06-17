import * as types from '../../redux/commonConstant'

export default function detail(state = {num:1,detailInfo:""}, action){
    switch (action.type) {
        case types.NUMINCREMENT:
            state.num++;
            return state ;
        case types.NUMDECREMENT:
            if(state.num == 1){
                state.num = 1;
                return state;
            }
            state.num--;
            return state;
        case types.SUCCESS:
            state.detailInfo = action.body;
            return state;
        default:
            return state;
    }
}
