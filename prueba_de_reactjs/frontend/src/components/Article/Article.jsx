import React, { useState, useEffect } from 'react';
import './Article.css';
import axios from 'axios'

import Header from '../Header/Header'
import Nav from '../Nav/Nav';
import ArticleBody from './Article-Body/Article-body';
import Footer from '../Footer/Footer';
import Comments from '../Comments/Comments';
import MostViewed from '../Most-Viewed/Most-Viewed';
import ArticleCover from './Article-cover/Article-cover';

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

            <Comments />

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