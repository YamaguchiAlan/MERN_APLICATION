import {SET_HIGLIGHT, SET_HIGLIGHT_BLOB, SET_HIGLIGHT_NEWS, RESET_HIGLIGHT_DATA} from '../constants/action-types'

export const setHiglight = (payload) => {
    return { type: SET_HIGLIGHT,
             higlight: payload
    }
}

export const setHiglightBlob = (payload) => {
    return { type: SET_HIGLIGHT_BLOB,
             blob: payload
    }
}

export const setHiglightNews = (payload) => {
    return { type: SET_HIGLIGHT_NEWS,
             news: payload
    }
}

export const resetHiglightData = () => {
    return { type: RESET_HIGLIGHT_DATA }
}