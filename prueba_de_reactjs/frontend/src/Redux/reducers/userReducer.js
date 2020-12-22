import { VERIFY_USER } from '../constants/action-types'

const initialState = {
    user: {
        username: "Anonymous user"
    }
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case VERIFY_USER:
            return Object.assign({}, state, {
                user: action
            })

        default:
            return state
    }
}

export default userReducer;