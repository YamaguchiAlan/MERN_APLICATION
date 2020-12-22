import React, {useState, useEffect} from 'react';
import axios from "axios";
import BodyForm from './Body-form/Body-Form';
import ArticleForm from './Article-form/Article-form';
import Preview from './Preview/Preview';
import Header from '../Header/Header';

const UpdateArticle = ({match}) => {

    const [cardBody, setCardBody] = useState([])
    const [articleData, setArticleData] = useState({})

    // BodyCard
    useEffect(() => {

        document.getElementById('preview').style.display="none"

        axios.get(`http://localhost:4000/api/article/${match.params.id}`)
        .then(res => {
            setCardBody([{
                ...res.data,
                imgInput: true
            }])
            document.getElementById('body-input-title').value = res.data.title
            document.getElementById('body-input-text').value = res.data.text
            document.getElementById('preview-body-img').src = document.getElementById('card-body-img').src

            setArticleData({
                ...res.data.article[0]
            })
            document.getElementById('article-title').value = res.data.article[0].title
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
    }, [])



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
                    defaultImg: url,
                    imgInput: false
                }])
                document.getElementById("preview-body-img").src=url
            }
        }
    }

    // Article
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
                img: url,
                imgInput: false
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
                    if(imgSrc[i].offsetWidth != 0) {
                        e.style.width = `${imgSrc[i].offsetWidth}px`
                        if(img[i].parentElement.getElementsByTagName('figcaption')[0]) {
                            img[i].parentElement.getElementsByTagName('figcaption')[0].style.width = `${imgSrc[i].offsetWidth}px`
                        }
                    }

                    if(imgSrc[i].src.startsWith('form', 26)) {
                        let filename = imgSrc[i].src.slice(35)
                        imgNames.push(filename)
                    } else{
                        if(imgSrc[i].src.slice(-2).startsWith('/')){
                            imgNames.push( parseInt(imgSrc[i].src.slice(-1)) )
                        } else {
                            imgNames.push( parseInt(imgSrc[i].src.slice(-2)) )
                        }
                    }
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
            axios.put(`http://localhost:4000/api/update-article/${cardBody[0]._id}`, {
                BodyData: cardBody[0],
                ArticleData: articleData
            })

            if(cardBody[0].imgInput == false){
                let file = document.getElementById('body-input-img').files[0]
                let data = new FormData()
                data.append('body-img', file)
                axios.put(`http://localhost:4000/api/update-news-img/${cardBody[0]._id}`, data, {headers: {'Content-Type': 'multipart/form-data'}})
                }
            if(articleData.imgInput == false){
                    let file = document.getElementById('article-input-img').files[0]
                    let data = new FormData()
                    data.append('article-img', file)
                    axios.put(`http://localhost:4000/api/update-article-img/${articleData._id}`, data, {headers: {'Content-Type': 'multipart/form-data'}})
                }
            }
        }

    return(
        <>
            <Header editMode={true}/>
            <div className="w-100 text-white new-article">
                <BodyForm bodyCardTextForm={bodyCardTextForm} cardBody={cardBody} />

                {articleData.content &&
                    <ArticleForm articleChange={articleChange} editorChange={editorChange} articleSubmit={articleSubmit} articleData={articleData} editorInitialValue={articleData.content}/>
                }

                <Preview articleData={articleData}/>
            </div>
        </>
    )
}

export default UpdateArticle;