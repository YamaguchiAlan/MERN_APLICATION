import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Header from '../Header/Header'
import Nav from '../Nav/Nav';
import ArticleBody from './Article-body';
import Footer from '../Footer/Footer';
import Comments from '../Comments/Comments';
import MostViewed from '../Most-Viewed/Most-Viewed';
import ArticleCover from './Article-cover';

const Article = ({match}) =>{
    useEffect(() => {
        axios.get(`http://localhost:4000/api/article/${match.params.id}`)
        .then(res => {
            setArticle(res.data.article[0])
        })
    },[]);


    const [Article, setArticle] = useState({});

    return(
        /* Verificando si existe */
        Article ? (
        <>
            <Header />

            <ArticleCover article={Article}/>

            <Nav />

            <ArticleBody article={Article} />

            <Comments newsId={match.params.id}/>

            <MostViewed/>

            <Footer />
        </>
        )
        : (<div>
            no existe
        </div>

        )
    )
}

export default Article;