import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import bodyCardReducer from './reducers/bodyCardReducer'
import articleReducer from './reducers/articleReducer'
import commentReducer from "./reducers/commentReducer";

const store = createStore(combineReducers({
    userReducer,
    bodyCardReducer,
    articleReducer,
    commentReducer
}), applyMiddleware(thunk))

export default store