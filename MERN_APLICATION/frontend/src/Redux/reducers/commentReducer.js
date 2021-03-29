import {SET_COMMENTS, DELETE_COMMENTS} from '../constants/action-types'

const initialState = {
    comments: {
        comment: "",
        createdAt: "",
        dislike: [],
        like: [],
        news: [],
        user: [],
        _id: ""
    }
}

function commentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COMMENTS:
            return  Object.assign({}, state, {
                comments: action.comments
            })
        case DELETE_COMMENTS:
            return initialState

        default:
            return state
    }
}

export default commentReducer