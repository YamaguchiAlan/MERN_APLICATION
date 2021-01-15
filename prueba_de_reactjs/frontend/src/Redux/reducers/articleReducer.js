import {SET_ARTICLE_DATA, SET_ARTICLE_BLOB, DELETE_ALL_ARTICLE_DATA} from '../constants/action-types'

const initialState = {
    articleData: {
        img:"/img/default-image.jpg",
        title:"",
        content: "",
        imagesName: [],
        imgInput: false
    },
    articleImgBlob: null
}

function articleReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ARTICLE_DATA:
            return Object.assign({}, state, {
                articleData: action.articleData
            })
        case SET_ARTICLE_BLOB:
            return Object.assign({}, state, {
                articleImgBlob: action.articleBlob
            })
        case DELETE_ALL_ARTICLE_DATA:
            return initialState
        default:
            return state
    }
}

export default articleReducer