import React from 'react'
import ArticleCover from '../../Article/Article-cover';
import ArticleBody from '../../Article/Article-body';
import Nav from '../../Nav/Nav'

const Preview = ({articleData}) => {

    const backBtn = () => {
        document.getElementById('preview').style.display="none"
        document.getElementById('article-form').style.display="block"
    }

    return(
        <div className="preview text-white mt-3 card" id="preview">
            <div className="card-header ">
                <div className="back-preview float-left d-flex align-items-center">
                    <i class="fas fa-chevron-left" id="preview-back-btn" onClick={backBtn}></i>
                    <div className="back-btn-text">
                        <span className="">Volver</span>
                    </div>
                </div>

                <h1 className="text-center font-weight-bold text-secondary">Vista Previa del articulo</h1>
            </div>
            <div className="card-body px-0">
                <ArticleCover article={articleData}/>
                <Nav/>
                <ArticleBody/>
            </div>
        </div>
    )
}

export default Preview