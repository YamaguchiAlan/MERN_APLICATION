import React, {useState, useEffect} from 'react';
import axios from "axios";
import 'yamaguchi_ckeditor-custom/sample/styles.css'
import BodyForm from './Body-form/Body-Form';
import ArticleForm from './Article-form/Article-form';
import Preview from './Preview/Preview';
import Header from '../Header/Header';

const CreateArticle = () => {

    useEffect(() => {
        document.getElementById('article-form').style.display="none"
        document.getElementById('preview').style.display="none"
    }, [])

    // BodyCard
    const [cardBody, setCardBody] = useState([{
        title: "Titulo",
        text: "Subtitulo",
        author: "Alan Yamaguchi",
        createdAt: Date.now() ,
        defaultImg: "./img/preview.png"
    }])

    const bodyCardTextForm = (e) => {
        e.preventDefault()
        if(e.target.name != "body-img") {
            setCardBody([{
                ...cardBody[0],
                [e.target.name]: e.target.value
            }])
        } else{
            if(e.target.files[0]) {
                const file = new File([e.target.files[0]], 'body-img.png', {type: 'image/png'})
                const url = window.URL.createObjectURL(file);
                setCardBody([{
                    ...cardBody[0],
                    defaultImg: url
                }])
                document.getElementById("preview-body-img").src=url
            }
        }
    }

    // Article
     const [articleData, setArticleData] = useState({
        img:"/img/default-image.jpg",
        title:"Dishonored 2, Prey y otros juegazos reunidos en un pack para celebrar los 20 años de Arkane Studios",
        content: "",
        imagesName: []
    })

    const articleChange = (e) => {
        if(e.target.name == "article-title") {
            setArticleData({
                ...articleData,
                title: e.target.value
            })
        } else{
            const file = new File([e.target.files[0]], 'article-img.png', {type: 'image/png'})
            const url = window.URL.createObjectURL(file)

            setArticleData({
                ...articleData,
                img: url
            })
        }
    }

    const editorChange = (event, editor) => {
        setTimeout(() => {
            const data = editor.getData()
            const content = document.getElementById("content")
            const editorTextArea = document.getElementById('editorTextArea')
            content.innerHTML=data;
            editorTextArea.value=content.textContent

            const imgSrc = document.querySelectorAll('.editor .ck figure img')
            const img =  document.querySelectorAll('.preview #content img')
            let imgNames = []

            if(imgSrc[0]) {
                img.forEach( (e, i) => {
                    e.src=imgSrc[i].src
                    e.style.width = `${imgSrc[i].offsetWidth}px`
                    if(img[i].parentElement.getElementsByTagName('figcaption')[0]) {
                        img[i].parentElement.getElementsByTagName('figcaption')[0].style.width = `${imgSrc[i].offsetWidth}px`
                    }
                    let filename = imgSrc[i].src.slice(35)
                    imgNames.push(filename)
                })
                editorTextArea.value="img"
            }

            const editIframe = document.querySelectorAll('.editor .media');
            const prevIframe = document.querySelectorAll('.preview .media')

            if (editIframe[0]) {
                editIframe.forEach( (e, i) => {
                    let iframe = e.firstElementChild.firstElementChild
                    let cloneIframe = iframe.cloneNode(true)

                    content.replaceChild(cloneIframe, prevIframe[i])
                } )
                editorTextArea.value="media"
            }
            setArticleData({
                ...articleData,
                content: content.innerHTML,
                imagesName: imgNames
            })
        },1)
    }

    const articleSubmit = (e) => {
        e.preventDefault()

        e.target.classList.add('was-validated');
        if (e.target.checkValidity() === false) {
            e.stopPropagation();
        } else{
            axios.post('http://localhost:4000/api/create-article', {
                BodyData: cardBody[0],
                ArticleData: articleData
            })

            .then( bodyId => {
                let file = document.getElementById('body-input-img').files[0]
                let data = new FormData()
                data.append('body-img', file)
                axios.post(`http://localhost:4000/api/news-img/${bodyId.data}`, data, {headers: {'Content-Type': 'multipart/form-data'}})

                .then( articleId => {
                    let file = document.getElementById('article-input-img').files[0]
                    let data = new FormData()
                    data.append('article-img', file)
                    axios.post(`http://localhost:4000/api/article-img/${articleId.data}`, data, {headers: {'Content-Type': 'multipart/form-data'}})
                })
            })

        }
    }

    return(
        <>
            <Header editMode={true}/>
            <div className="w-100 text-white new-article">
                <BodyForm bodyCardTextForm={bodyCardTextForm} cardBody={cardBody} />

                <ArticleForm articleChange={articleChange} editorChange={editorChange} articleSubmit={articleSubmit} articleData={articleData}/>

                <Preview articleData={articleData}/>
            </div>
        </>
    )
}

export default CreateArticle;