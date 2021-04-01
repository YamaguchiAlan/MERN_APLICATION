import { VERIFY_USER_STARTED, VERIFY_USER_SUCCESS, VERIFY_USER_FAILED, FOLLOW_USER, UNFOLLOW_USER } from '../constants/action-types'
import axios from 'axios'

export function verifyUser() {
    return dispatch => {
        dispatch(verifyStarted())
        axios.get("/users/authenticate")
        .then((res) => {
            dispatch(verifySuccess(res.data))
        })
        .catch((err) => {
            dispatch(verifiedFailed())
        })
    }
}

function  verifyStarted() {
    return {type: VERIFY_USER_STARTED}
}

function verifySuccess(data) {
    return {type: VERIFY_USER_SUCCESS,
            user: data
    }
}

function verifiedFailed() {
    return {type: VERIFY_USER_FAILED}
}

export function followUser(payload) {
    return {type: FOLLOW_USER,
            id: payload
    }
}

export function unfollowUser(payload) {
    return {type: UNFOLLOW_USER,
            id: payload
    }
}