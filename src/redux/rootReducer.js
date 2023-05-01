import {combineReducers} from 'redux'
import { userDataReducer } from './reducer'
export const rootReducer =combineReducers({
userDataReducer:userDataReducer
})