import {ADD_AGE} from './Actions'

const INIT_STATE = {
    age: '',
}

export const ageReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_AGE:
            return Object.assign({}, state, { age: action.age})
        default:
            return state
    }
}