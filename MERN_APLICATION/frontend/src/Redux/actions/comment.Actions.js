import {SET_COMMENTS, DELETE_COMMENTS} from '../constants/action-types'

export const setComments = (payload) => {
    return { type: SET_COMMENTS,
             comments: payload
    }
}

export const deleteComments = () => {
    return { type: DELETE_COMMENTS }
}