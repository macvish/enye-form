import {ADD_FNAME} from './Actions'

const INIT_STATE = {
    name: ''
}

export const fnameReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_FNAME:
            return Object.assign({}, state, { name: action.fname})
        default:
            return state
    }
}