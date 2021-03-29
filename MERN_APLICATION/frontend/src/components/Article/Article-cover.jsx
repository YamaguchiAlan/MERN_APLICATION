import React from 'react'

const ArticleCover = ({article}) => (
    <div className="cover card border-0">
        <img id="article-cover-img" src={article.img ? article.img : `${process.env.REACT_APP_API_URL}/api/article/${article._id}/cover-image?date=${article.updatedAt}`} alt="Article img" className="atc-img card-img"/>
        <div className="card-img-overlay atc-title-container">
            <h1 className="atc-title card-text text-center"><i>{article.title}</i></h1>
        </div>
    </div>
)

export default ArticleCover;