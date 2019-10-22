import { combineReducers } from 'redux'

import { fnameReducer } from './fnameReducer'
import { lnameReducer } from './lnameReducer'
import { ageReducer } from './ageReducer'
import { hobbyReducer } from './hobbyReducer';
import { dateReducer } from './dateReducer'

export const rootReducer = combineReducers({
    fname: fnameReducer,
    lname: lnameReducer,
    birthday: dateReducer,
    age: ageReducer,
    hobby: hobbyReducer
})