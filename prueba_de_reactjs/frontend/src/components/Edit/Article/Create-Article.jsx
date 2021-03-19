import React, {useEffect} from 'react';
import axios from "axios";
import 'yamaguchi_ckeditor-custom/sample/styles.css'
import BodyForm from './Body-form/Body-Form';
import ArticleForm from './Article-form/Article-form';
import Preview from './Preview/Preview';
import Header from '../../Header/Header';

import {connect} from 'react-redux'
import {deleteBodyCardData, setBodyCardAuthor} from '../../../Redux/actions/bodyCardActions'
import {deleteAllArticleData} from '../../../Redux/actions/articleActions'
import {useHistory} from 'react-router-dom'

const mapStateToPops = state => {
    return {
        bodyCard: state.bodyCardReducer,
        article: state.articleReducer,
        user: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBodyCardAuthor: (author) => dispatch(setBodyCardAuthor(author)),
        deleteBodyCardData: () => dispatch(deleteBodyCardData()),
        deleteAllArticleData: () => dispatch(deleteAllArticleData())
    }
}

const CreateArticle = ({bodyCard, article, user, setBodyCardAuthor, deleteBodyCardData, deleteAllArticleData}) => {
    const history = useHistory()

    useEffect(() => {
        document.getElementById('article-form').style.display="none"
        document.getElementById('preview').style.display="none"
        if(user._id){
            setBodyCardAuthor({
                username: user.username
            })
        } else{
            history.push("/")
        }
        document.getElementById("article-author-top").innerHTML=user.username
        document.getElementById("article-author-bottom").innerHTML=`- ${user.username}`
        document.getElementById("article-date").innerHTML="just now"

        return() => {
            deleteBodyCardData()
            deleteAllArticleData()
        }
    }, [])

    const articleSubmit = (e) => {
        e.preventDefault()

        e.target.classList.add('was-validated');
        if (e.target.checkValidity() === false) {
            e.stopPropagation();
        } else{
            axios.post('/article', {
                BodyData: bodyCard.bodyCard[0],
                ArticleData: article.articleData
            })

            .then( bodyId => {
                let data = new FormData()
                data.append('body-img', bodyCard.bodyCardImgBlob)
                axios.post(`/news/${bodyId.data}/image`, data, {headers: {'Content-Type': 'multipart/form-data'}})

                .then( articleId => {
                    let data = new FormData()
                    data.append('article-img', article.articleImgBlob)
                    axios.put(`/article/${articleId.data}/image`, data, {headers: {'Content-Type': 'multipart/form-data'}})
                    .then(history.push("/"))
                })
            })

        }
    }

    return(
        <>
            <Header editMode={true}/>
            <div className="w-100 text-white new-article">
                <BodyForm />

                <ArticleForm articleSubmit={articleSubmit} />

                <Preview/>
            </div>
        </>
    )
}

export default connect(mapStateToPops, mapDispatchToProps)(CreateArticle);