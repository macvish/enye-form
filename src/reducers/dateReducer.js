import {ADD_DATE} from './Actions'

const INIT_STATE = {
    year: null,
    date: null
}

export const dateReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_DATE:
            return Object.assign({}, state, {year: action.dateYear, date: action.dateString})    
        default:
            return state
    }
}