import { SET_BODY_CARD, SET_BODY_CARD_BLOB, DELETE_ALL_BODY_CARD_DATA, SET_BODY_CARD_AUTHOR } from '../constants/action-types'

const initialState = {
    bodyCard: [{
        title: "",
        text: "",
        author: {
            username:"",
            _id: ""
        },
        createdAt: Date.now() ,
        defaultImg: "/img/preview.png",
        imgInput: false
    }],
    bodyCardImgBlob: null
}

function bodyCardReducer(state = initialState, action) {
    switch (action.type) {
        case SET_BODY_CARD:
            return Object.assign({}, state, {
                bodyCard: [{
                    ...action.bodyCard[0],
                    createdAt: Date.now()
                }]
            })
        case SET_BODY_CARD_AUTHOR:
            return Object.assign({}, state, {
                bodyCard: [{
                    ...state.bodyCard[0],
                    author: action.author,
                    createdAt: Date.now()
                }]
            })
        case SET_BODY_CARD_BLOB:
            return Object.assign({}, state, {
                bodyCardImgBlob: action.bodyCardBlob,
                bodyCard: [{
                    ...state.bodyCard[0],
                    createdAt: Date.now()
                }]
            })
        case DELETE_ALL_BODY_CARD_DATA:
            return initialState
        default:
            return state
    }
}

export default bodyCardReducer;