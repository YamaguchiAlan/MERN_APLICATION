import { VERIFY_USER, LOGOUT } from '../constants/action-types'

const initialState = {
    user: {
        username: "Anonymous",
        verified: false,
        followers: [],
        following: []
    }
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case VERIFY_USER:
            return Object.assign({}, state, {
                user: action.user
            })
        case LOGOUT:
            return initialState

        default:
            return state
    }
}

export default userReducer;