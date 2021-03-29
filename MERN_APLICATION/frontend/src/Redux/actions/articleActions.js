import {SET_ARTICLE_DATA, SET_ARTICLE_BLOB, DELETE_ALL_ARTICLE_DATA} from '../constants/action-types'

export function setArticleData(payload) {
    return { type: SET_ARTICLE_DATA,
             articleData: payload
    }
}

export function setArticleBlob(payload) {
    return { type: SET_ARTICLE_BLOB,
             articleBlob: payload
    }
}

export function deleteAllArticleData() {
    return { type: DELETE_ALL_ARTICLE_DATA }
}