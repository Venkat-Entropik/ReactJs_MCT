import {combineReducers} from 'redux'
// import { userDataReducer } from './reducer'
import { blogDataReducer } from './reducer'
import { galleryReducer } from './reducer'
export const rootReducer =combineReducers({
// userDataReducer:userDataReducer,
blogDataReducer:blogDataReducer,
galleryReducer:galleryReducer
})