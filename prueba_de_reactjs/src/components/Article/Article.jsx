import React, { useState, useEffect } from 'react';
import './Article.css';
import Nav from '../Nav/Nav';
import ArticleBody from './Article-Body/Article-body';
import Footer from '../Footer/Footer';
import Comments from '../Comments/Comments';

const Article = ({match}) =>{
    useEffect(() => {
        fetch('/JSON/Articles.json')
        .then(response => response.json())
        .then(data => setArticles(data))
    });

    
    const [Articles, setArticles] = useState([]);
    /* Filtrando el articulo mediante la url */
    const actualArticle = Articles.filter( c => c.articleId == match.params.articleId)[0];

    return(
        /* Verificando si existe */
        actualArticle ? (
        <div className="App">

            <div className="cover">
            <img src={actualArticle.img} alt="Imagen" className="atc-img"/>
            <h1 className="atc-title"><i>{actualArticle.title}</i></h1>
            </div>

            <Nav />

            <ArticleBody article={actualArticle} />
            
            <Comments articleId={actualArticle.articleId} />

            <Footer />
        </div>
        )
        : (<div>
            no existe
        </div>

        )
    )
}

export default Article;