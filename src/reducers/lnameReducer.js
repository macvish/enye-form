import {ADD_LNAME} from './Actions'

const INIT_STATE = {
    name: '',
}

export const lnameReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_LNAME:
            return Object.assign({}, state, { name: action.lname})  
        default:
            return state
    }
}