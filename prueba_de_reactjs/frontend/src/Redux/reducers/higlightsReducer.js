import {SET_HIGLIGHT, SET_HIGLIGHT_BLOB, SET_HIGLIGHT_NEWS,  RESET_HIGLIGHT_DATA} from '../constants/action-types'

const initialState = {
    higlight: {
        title: "",
        className: "",
        image: "",
        widthAspect: 1,
        heightAspect: 1,
        index: 0,
        _id: "",
        news: {
            title: ""
        }
    },
    higlightBlob: null
}

function higlightsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_HIGLIGHT:
            return Object.assign({}, state, {
                higlight: action.higlight
            })
        case SET_HIGLIGHT_BLOB:
            return Object.assign({}, state, {
                higlightBlob: action.blob
            })
        case SET_HIGLIGHT_NEWS:
            return Object.assign({}, state, {
                higlight: {
                    ...state.higlight,
                    news: action.news
                }
            })
        case RESET_HIGLIGHT_DATA:
            return initialState

        default:
            return state
    }
}

export default higlightsReducer