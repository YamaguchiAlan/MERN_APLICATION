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
    },[]);


    const [Articles, setArticles] = useState([]);
    /* Filtrando el articulo mediante la url */
    const actualArticle = Articles.filter( c => c.title === match.params.title)[0];

    return(
        /* Verificando si existe */
        actualArticle ? (
        <>

            <div className="cover card border-0">
                <img src={actualArticle.img} alt="Article img" className="atc-img card-img"/>
                <div className="card-img-overlay">
                    <h1 className="atc-title card-text"><i>{actualArticle.title}</i></h1>
                </div>
            </div>

            <Nav />

            <ArticleBody article={actualArticle} />

            <Comments articleId={actualArticle.articleId} />

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