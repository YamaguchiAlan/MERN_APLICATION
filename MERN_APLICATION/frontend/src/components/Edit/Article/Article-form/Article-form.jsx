import React, {useState, useRef} from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import customEditor from 'yamaguchi_ckeditor-custom/build/ckeditor'
import {connect} from 'react-redux'
import {setArticleData, setArticleBlob} from '../../../../Redux/actions/articleActions'
import ImageCropper from "../../../Image-cropper/Image-cropper";
import {scrollFunc} from '../../../../onScroll'
import queryString from 'query-string'

const mapStateToPops = state => {
    return {
        articleData: state.articleReducer.articleData,
        userId: state.userReducer.user._id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setArticleData: articleData => dispatch(setArticleData(articleData)),
        setArticleBlob: blob => dispatch(setArticleBlob(blob))
    }
}

const ArticleForm = ({userId, articleSubmit, articleData, setArticleData, setArticleBlob}) => {
    const [inputImg, setInputImg] = useState("")

    const inputRef = useRef(null)

    const articleImgClick = (e) => {
        e.preventDefault()
        document.getElementById("article-input-img").click();
    }

    const inputOnChange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.addEventListener('load', () => {
            setInputImg(reader.result)
        }, false)

        if(file) {
            reader.readAsDataURL(file)
        }
    }

    const cropperCallback = (blob) => {
        setInputImg("")

        const url = window.URL.createObjectURL(blob)
        setArticleData({
            ...articleData,
            img: url,
            imgInput: true
        })
        setArticleBlob(blob)
        document.getElementById('preview-article-img').src=url;
    }

    const editorChange = (event, editor) => {
        setTimeout(() => {
            const data = editor.getData()
            const content = document.getElementById("content")
            editorFocus()
            const editorTextArea = document.getElementById('editorTextArea')
            content.innerHTML=data;
            editorTextArea.value=content.textContent

            const imgSrc = document.querySelectorAll('.editor .ck figure img')
            const img =  document.querySelectorAll('.preview #content img')
            let imgNames = []

            if(imgSrc[0]) {
                img.forEach( (e, i) => {

                    if(imgSrc[i].offsetWidth !== 0) {
                        e.style.width = `${imgSrc[i].offsetWidth}px`
                        if(img[i].parentElement.getElementsByTagName('figcaption')[0]) {
                            img[i].parentElement.getElementsByTagName('figcaption')[0].style.width = `${imgSrc[i].offsetWidth}px`
                        }
                    }

                    let imgQueryIndex = imgSrc[i].src.indexOf("?")
                    let imgQuery = queryString.parse(imgSrc[i].src.slice(imgQueryIndex))

                    if(imgQuery.id) {
                        let filename = imgQuery.id
                        imgNames.push(filename)
                    } else{
                        imgNames.push(parseInt(imgQuery.index))
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
            }

            setArticleData({
                ...articleData,
                content: content.innerHTML,
                imagesName: imgNames
            })
        },1)
    }

    const previewBtn = (e) => {
        e.preventDefault()
        document.getElementById('article-form').style.display = "none"
        document.getElementById('preview').style.display = 'block'
        scrollFunc()
    }

    const backBtn = (e) => {
        e.preventDefault()
        document.getElementById('article-form').style.display="none"
        document.getElementById('body-card-form').style.display="block"
    }

    const editorFocus = () => {
        const header = document.getElementById("header")
        const stickyPanel = document.getElementsByClassName("ck-sticky-panel__content_sticky")[0]
        if(stickyPanel){
            stickyPanel.style.top=`${header.offsetHeight}px`
        }
    }

    return(
        <div className="row mw-100 mt-3 mx-lg-0 mx-3" id="article-form">
            <div className="card article-form-back ">
                <div className="card-header article-form-header d-flex justify-content-center border-bottom">
                    <h2>Article Content</h2>
                    <button className="btn btn-outline-info preview-btn" onClick={previewBtn}>Article Preview</button>
                </div>
                <div className="card-body">
                    <form className="editor article-form form-group d-flex flex-column" onSubmit={articleSubmit} noValidate>
                        <div className="form-group  mb-4">
                            <label for="article-img" className="form-label">Image</label>
                            <div className="article-form-img">
                                <img src="/img/default-image.jpg" alt="preview-article" className="preview-article-img" id="preview-article-img" />
                                <div className="choose-article-img  d-flex align-items-center justify-content-center">
                                    <button className="btn btn-outline-light article-img-btn" onClick={articleImgClick}>Choose Image</button>
                                </div>
                            </div>
                            {!articleData.imgInput ?
                                <input
                                    type="file"
                                    id="article-input-img"
                                    accept="image/*"
                                    name="article-img"
                                    className="article-input-img form-control"
                                    ref={inputRef}
                                    onChange={inputOnChange}
                                    required
                                />
                            :
                                <input
                                    type="file"
                                    id="article-input-img"
                                    accept="image/*"
                                    name="article-img"
                                    className="article-input-img form-control"
                                    ref={inputRef}
                                    onChange={inputOnChange}
                                />
                            }
                            <div className="invalid-feedback">
                                Please choose an image
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Article content</label>
                                <CKEditor
                                editor={customEditor}
                                config={{
                                    toolbar: {
                                        items: [
                                            'heading',
                                            '|',
                                            'fontSize',
                                            'fontFamily',
                                            'fontBackgroundColor',
                                            'fontColor',
                                            'bold',
                                            '|',
                                            'italic',
                                            'blockQuote',
                                            'link',
                                            'horizontalLine',
                                            'bulletedList',
                                            'numberedList',
                                            '|',
                                            'alignment',
                                            'indent',
                                            'outdent',
                                            'insertTable',
                                            '|',
                                            'imageUpload',
                                            'mediaEmbed',
                                            'undo',
                                            'redo'
                                        ]
                                    },
                                    language: 'es',
                                    image: {
                                        toolbar: [
                                            'imageTextAlternative'
                                        ]
                                    },
                                    table: {
                                        contentToolbar: [
                                            'tableColumn',
                                            'tableRow',
                                            'mergeTableCells',
                                            'tableCellProperties',
                                            'tableProperties'
                                        ]
                                    },
                                    ckfinder: {
                                        uploadUrl: `${process.env.REACT_APP_API_URL}/api/article/form/${userId}/image`,
                                        authentication: true
                                    }
                                }}

                            onChange={editorChange}

                            onFocus={editorFocus}

                            onReady={(editor) => {
                                if(editor){
                                    const prevIframe = document.querySelectorAll('.preview iframe');

                                    if (prevIframe[0]) {
                                        prevIframe.forEach( (e, i) => {
                                            let figure = document.createElement("figure")
                                            figure.className="media"
                                            figure.innerHTML = `<oembed url="${e.src}"></oembed>`

                                            document.getElementById("content").replaceChild(figure, e.parentNode)
                                        } )
                                    }

                                    editor.setData(document.getElementById("content").innerHTML)
                                }
                            } }
                            />
                            <textarea id="editorTextArea" className="d-none form-control" required></textarea>
                            <div className="invalid-feedback">
                                The article must contain something
                            </div>
                        </div>

                        <div className="btn-group mt-5">
                            <button className="btn btn-outline-secondary btn-lg article-form-back-btn" onClick={backBtn}>Back</button>
                            <button type="submit" className="btn btn-info btn-lg article-form-submit-btn" id="article-submit-btn">Create Article</button>
                        </div>
                    </form>
                </div>
            </div>
            {
                inputImg &&
                    <ImageCropper
                        callback={cropperCallback}
                        inputImg={inputImg}
                        setInputImg={setInputImg}
                        aspect={16 / 9}
                        width={1920}
                        height={1080}
                    />
            }
        </div>
    )
}

export default connect(mapStateToPops, mapDispatchToProps)(ArticleForm);