import {createStore, combineReducers} from 'redux'
import userReducer from './reducers/userReducer'
import bodyCardReducer from './reducers/bodyCardReducer'
import articleReducer from './reducers/articleReducer'

const store = createStore(combineReducers({
    userReducer,
    bodyCardReducer,
    articleReducer
}))

export default store