import { SET_BODY_CARD, SET_BODY_CARD_BLOB, DELETE_ALL_BODY_CARD_DATA, SET_BODY_CARD_AUTHOR } from '../constants/action-types'

export const setBodyCard = (payload) => {
    return { type: SET_BODY_CARD,
             bodyCard: payload
    }
}

export const setBodyCardBlob = (payload) => {
    return { type: SET_BODY_CARD_BLOB,
             bodyCardBlob: payload
    }
}

export const deleteBodyCardData = () => {
    return { type: DELETE_ALL_BODY_CARD_DATA }
}

export const setBodyCardAuthor = (payload) => {
    return { type: SET_BODY_CARD_AUTHOR,
             author: payload
    }
}