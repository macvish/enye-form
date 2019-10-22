import {ADD_HOBBY} from './Actions'

const INIT_STATE = {
    hobby: '',
}

export const hobbyReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_HOBBY:
            return Object.assign({}, state, { hobby: action.hobby}) 
        default:
            return state
    }
}