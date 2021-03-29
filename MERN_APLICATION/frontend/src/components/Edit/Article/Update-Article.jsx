import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom'
import {format} from 'timeago.js'

import BodyForm from './Body-form/Body-Form';
import ArticleForm from './Article-form/Article-form';
import Preview from './Preview/Preview';
import Header from '../../Header/Header';

import {connect} from 'react-redux'
import {setFirstBodyCard, deleteBodyCardData} from '../../../Redux/actions/bodyCardActions'
import {setArticleData, deleteAllArticleData} from '../../../Redux/actions/articleActions'

const mapStateToPops = state => {
    return {
        bodyCard: state.bodyCardReducer,
        article: state.articleReducer,
        verified: state.userReducer.user.verified
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFirstBodyCard: (data) => dispatch(setFirstBodyCard(data)),
        deleteBodyCardData: () => dispatch(deleteBodyCardData()),
        setArticleData: (data) => dispatch(setArticleData(data)),
        deleteAllArticleData: () => dispatch(deleteAllArticleData())
    }
}

const UpdateArticle = ({match, bodyCard, article, setFirstBodyCard, setArticleData, deleteBodyCardData, deleteAllArticleData, verified}) => {
    const history = useHistory()
    const [request, setRequest] = useState(false)

    useEffect(() => {
        if(verified){
            document.getElementById('preview').style.display="none"
            axios.get(`/articles/${match.params.id}`)
            .then(res => {
                setRequest(true)
                const data = res.data.data

                setFirstBodyCard([{
                    ...data,
                    article: [],
                    imgInput: true,
                    formatedDate: format(data.createdAt)
                }])

                document.getElementById('preview-body-img').src = document.getElementById('card-body-img').src

                const actives = document.querySelectorAll("#body-card-form .card-header button.active")
                actives.forEach(btn => {
                    btn.classList.remove("active")
                })

                document.getElementById(`body-type-${data.type}`).classList.add("active")

                setArticleData({
                    ...data.article[0]
                })
                document.getElementById("article-author-top").innerHTML=data.author.username
                document.getElementById("article-author-bottom").innerHTML=`- ${data.author.username}`
                document.getElementById("article-date").innerHTML=format(data.createdAt)

                document.getElementById('preview-article-img').src = document.getElementById('article-cover-img').src
                document.getElementById("content").innerHTML = data.article[0].content;
                const images = document.querySelectorAll('#content img')
                images.forEach((e, i) => {
                    e.src = data.article[0].imagesUrl[i]
                })

                let newContent = document.getElementById('content').innerHTML
                setArticleData({
                    ...data.article[0],
                    content: newContent,
                    imgInput: true
                })
                document.getElementById("article-submit-btn").innerHTML="Update Article"
                document.getElementById('article-form').style.display="none"

            })
        } else{
            history.push("/")
        }
        return(() => {
            deleteBodyCardData()
            deleteAllArticleData()
        })
    }, [])

    const articleSubmit = async (e) => {
        e.preventDefault()

        e.target.classList.add('was-validated');
        if (e.target.checkValidity() === false) {
            e.stopPropagation();
        } else{
            await axios.put(`/article/${bodyCard.bodyCard[0]._id}`, {
                BodyData: bodyCard.bodyCard[0],
                ArticleData: article.articleData
            })

            if(bodyCard.bodyCardImgBlob){
                let data = new FormData()
                data.append('body-img', bodyCard.bodyCardImgBlob)
                await axios.put(`/news/${bodyCard.bodyCard[0]._id}/image`, data, {headers: {'Content-Type': 'multipart/form-data'}})
                }
            if(article.articleImgBlob){
                    let data = new FormData()
                    data.append('article-img', article.articleImgBlob)
                    await axios.put(`/article/${article.articleData._id}/image`, data, {headers: {'Content-Type': 'multipart/form-data'}})
                }

            history.push("/")
            }
        }

    return(
        <>
            <Header editMode={true}/>
            <div className="w-100 text-white new-article">
                <BodyForm/>

                {request &&
                    <ArticleForm articleSubmit={articleSubmit} />
                }

                <Preview/>
            </div>
        </>
    )
}

export default connect(mapStateToPops, mapDispatchToProps)(UpdateArticle);