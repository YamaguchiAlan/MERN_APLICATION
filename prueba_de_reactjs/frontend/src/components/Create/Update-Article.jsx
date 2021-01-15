import React, {useEffect} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom'

import BodyForm from './Body-form/Body-Form';
import ArticleForm from './Article-form/Article-form';
import Preview from './Preview/Preview';
import Header from '../Header/Header';

import {connect} from 'react-redux'
import {setBodyCard, deleteBodyCardData} from '../../Redux/actions/bodyCardActions'
import {setArticleData, deleteAllArticleData} from '../../Redux/actions/articleActions'

const mapStateToPops = state => {
    return {
        bodyCard: state.bodyCardReducer,
        article: state.articleReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBodyCard: (data) => dispatch(setBodyCard(data)),
        deleteBodyCardData: () => dispatch(deleteBodyCardData()),
        setArticleData: (data) => dispatch(setArticleData(data)),
        deleteAllArticleData: () => dispatch(deleteAllArticleData())
    }
}

const UpdateArticle = ({match, bodyCard, article, setBodyCard, setArticleData, deleteBodyCardData, deleteAllArticleData}) => {
    const history = useHistory()

    useEffect(() => {

        document.getElementById('preview').style.display="none"

        axios.get(`http://localhost:4000/api/article/${match.params.id}`)
        .then(res => {
            setBodyCard([{
                ...res.data,
                imgInput: true
            }])
            document.getElementById('preview-body-img').src = document.getElementById('card-body-img').src

            setArticleData({
                ...res.data.article[0]
            })
            document.getElementById('preview-article-img').src = document.getElementById('article-cover-img').src
            document.getElementById("content").innerHTML = res.data.article[0].content;
            const images = document.querySelectorAll('#content img')
            images.forEach((e, i) => {
                e.src = res.data.article[0].imagesUrl[i]
            })
            let newContent = document.getElementById('content').innerHTML
            setArticleData({
                ...res.data.article[0],
                content: newContent,
                imgInput: true
            })
        })
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
            await axios.put(`http://localhost:4000/api/update-article/${bodyCard.bodyCard[0]._id}`, {
                BodyData: bodyCard.bodyCard[0],
                ArticleData: article.articleData
            })

            if(bodyCard.bodyCard[0].imgInput === false){
                let data = new FormData()
                data.append('body-img', bodyCard.bodyCardImgBlob)
                await axios.put(`http://localhost:4000/api/update-news-img/${bodyCard.bodyCard[0]._id}`, data, {headers: {'Content-Type': 'multipart/form-data'}})
                }
            if(article.articleData.imgInput === false){
                    let data = new FormData()
                    data.append('article-img', article.articleImgBlob)
                    await axios.put(`http://localhost:4000/api/update-article-img/${article.articleData._id}`, data, {headers: {'Content-Type': 'multipart/form-data'}})
                }
            }
            history.push("/")
        }

    return(
        <>
            <Header editMode={true}/>
            <div className="w-100 text-white new-article">
                <BodyForm/>

                {article.articleData.content &&
                    <ArticleForm articleSubmit={articleSubmit}/>
                }

                <Preview/>
            </div>
        </>
    )
}

export default connect(mapStateToPops, mapDispatchToProps)(UpdateArticle);