import React from 'react'
import ArticleCover from '../../../Article/Article-cover';
import ArticleBody from '../../../Article/Article-body';
import Nav from '../../../Nav/Nav'
import {connect} from 'react-redux'

const mapStateToPops = state => {
    return {articleData: state.articleReducer.articleData}
}

const Preview = ({articleData}) => {

    const backBtn = () => {
        document.getElementById('preview').style.display="none"
        document.getElementById('article-form').style.display="block"
    }

    return(
        <div className="preview text-white mt-3 card" id="preview">
            <div className="card-header">
                <div className="back-preview d-flex align-items-center">
                    <i class="fas fa-chevron-left" id="preview-back-btn" onClick={backBtn}></i>
                    <div className="back-btn-text">
                        <span>Go Back</span>
                    </div>
                </div>

                <h1 className="text-center font-weight-bold preview-header">Article Preview</h1>
            </div>
            <div className="card-body px-0">
                <ArticleCover article={articleData}/>
                <div id="preview-article-nav-back">
                    <Nav/>
                </div>
                <ArticleBody/>
            </div>
        </div>
    )
}

export default connect(mapStateToPops)(Preview)