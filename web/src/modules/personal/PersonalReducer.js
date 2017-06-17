import * as types from '../../redux/commonConstant'

export default function personal(state = {data:[{"nickname":"请登录"}]}, action){
    switch (action.type) {
        case types.REQUEST:
            return state;
        case types.SUCCESS:
            state.data = action.body;
            return state;
        case types.FAILURE:
            return state;
        default:
            return state;
    }
}

