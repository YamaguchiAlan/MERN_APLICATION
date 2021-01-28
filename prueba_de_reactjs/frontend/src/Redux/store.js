import {createStore, combineReducers} from 'redux'
import userReducer from './reducers/userReducer'
import bodyCardReducer from './reducers/bodyCardReducer'
import articleReducer from './reducers/articleReducer'
import commentReducer from "./reducers/commentReducer";

const store = createStore(combineReducers({
    userReducer,
    bodyCardReducer,
    articleReducer,
    commentReducer
}))

export default store