import React from 'react'
import withLoader from '../HOC-With-Loader/HOC-withLoader'

import Nav from '../Nav/Nav';
import ArticleBody from './Article-body';
import Comments from '../Comments/Comments';
import MostViewed from '../Most-Viewed/Most-Viewed';
import ArticleCover from './Article-cover';

const ArticleSuccess = ({Article, newsId}) => {
    return(
        <div id="article">
            <ArticleCover article={Article}/>

            <Nav />

            <ArticleBody article={Article} />

            <Comments newsId={newsId}/>

            <div id="most-viewed-back">
                <MostViewed/>
            </div>
        </div>
    )
}

export default withLoader(ArticleSuccess)