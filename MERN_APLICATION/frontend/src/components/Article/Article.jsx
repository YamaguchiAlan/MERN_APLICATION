import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {checkWindowSize} from '../../onResize'

import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import ArticleSuccess from './Article-Success';

const Article = ({match}) =>{
    useEffect(() => {
        axios.get(`/articles/${match.params.id}`)
        .then(res => {
            if(res.data.success){
                setArticle({
                    ...res.data.data.article[0],
                    author: res.data.data.author,
                    title: res.data.data.title
                })
                setRequestState("Success")

                axios.put(`/articles/${match.params.id}/views`)
            }else{
                setRequestState("Failed")
            }
        })
        .catch(err => {
            setRequestState("Failed")
        })
        checkWindowSize()
    },[match.params.id]);


    const [Article, setArticle] = useState();
    const [requestState, setRequestState] = useState("InProcess")

    return(
        <>
            <Header />

            <ArticleSuccess Article={Article} newsId={match.params.id} articleLoader={true} requestState={requestState}/>

            <Footer />
        </>
    )
}

export default Article;