import { VERIFY_USER_SUCCESS, VERIFY_USER_FAILED, FOLLOW_USER, UNFOLLOW_USER } from '../constants/action-types'

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
        case VERIFY_USER_SUCCESS:
            return Object.assign({}, state, {
                user: action.user
            })
        case VERIFY_USER_FAILED:
            return initialState
        case FOLLOW_USER:
            return Object.assign({}, state, {
                user: {
                    ...state.user,
                    following: [...state.user.following, action.id]
                }
            })

        case UNFOLLOW_USER:
            return Object.assign({}, state, {
                user: {
                    ...state.user,
                    following: state.user.following.filter(e => e != action.id)
                }
            })

        default:
            return state
    }
}

export default userReducer;