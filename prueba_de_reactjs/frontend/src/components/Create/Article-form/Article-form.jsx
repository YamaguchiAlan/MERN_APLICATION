import React, {useState, useRef, useEffect} from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import customEditor from 'yamaguchi_ckeditor-custom/build/ckeditor'
import {connect} from 'react-redux'
import {setArticleData, setArticleBlob} from '../../../Redux/actions/articleActions'
import ImageCropper from "../../Image-cropper/Image-cropper";

const mapStateToPops = state => {
    return { articleData: state.articleReducer.articleData }
}

const mapDispatchToProps = dispatch => {
    return {
        setArticleData: articleData => dispatch(setArticleData(articleData)),
        setArticleBlob: blob => dispatch(setArticleBlob(blob))
    }
}

const ArticleForm = ({articleSubmit, articleData, setArticleData, setArticleBlob}) => {
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
            imgInput: false
        })
        setArticleBlob(blob)
        document.getElementById('preview-article-img').src=url;
    }

    const articleChange = (e) => {
        if(e.target.name === "article-title") {
            setArticleData({
                ...articleData,
                title: e.target.value
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
                    if(imgSrc[i].offsetWidth !== 0) {
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

    const previewBtn = (e) => {
        e.preventDefault()
        document.getElementById('article-form').style.display = "none"
        document.getElementById('preview').style.display = 'block'
    }

    const backBtn = (e) => {
        e.preventDefault()
        document.getElementById('article-form').style.display="none"
        document.getElementById('body-card-form').style.display="block"
    }

    return(
        <div className="row mt-3" id="article-form">
            <div className="card article-form-back">
                <div className="card-header d-flex flex-row justify-content-between">

                    <h2>Contenido del articulo</h2>
                    <button className="btn btn-outline-info preview-btn" onClick={previewBtn}>Vista previa del articulo</button>
                </div>
                <div className="card-body">
                    <form className="editor article-form form-group d-flex flex-column" onSubmit={articleSubmit} onChange={articleChange} noValidate>
                        <div className="form-group  mb-4">
                            <label for="article-title"  className="form-label">Titulo</label>
                            <textarea className="article-form-title text-white form-control" id="article-title" name="article-title" maxLength="165" value={articleData.title} required></textarea>
                            <div className="invalid-feedback">
                                El articulo debe tener un titulo
                            </div>
                        </div>
                        <div className="form-group  mb-4">
                            <label for="article-img" className="form-label">Imagen</label>
                            <div className="article-form-img">
                                <img src="/img/default-image.jpg" alt="preview-article" className="preview-article-img" id="preview-article-img" />
                                <div className="choose-article-img  d-flex align-items-center justify-content-center">
                                    <button className="btn btn-outline-light article-img-btn" onClick={articleImgClick}>Elegir Imagen</button>
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
                                Por favor seleccione una imagen
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Contenido del articulo</label>
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
                                        uploadUrl: 'http://localhost:4000/api/form-img'
                                    }
                                }}

                            onChange={editorChange}

                            onReady={(editor) => {
                                editor.setData(articleData.content)
                            } }
                            />
                            <textarea id="editorTextArea" className="d-none form-control" required></textarea>
                            <div className="invalid-feedback">
                                El articulo debe contener algo
                            </div>
                        </div>

                        <div className="btn-group mt-5">
                            <button className="btn btn-outline-secondary btn-lg" onClick={backBtn}>Atras</button>
                            <button type="submit" className="btn btn-info btn-lg">Crear Articulo</button>
                        </div>
                    </form>
                </div>
            </div>
            {
                inputImg &&
                    <ImageCropper
                        callback={cropperCallback}
                        inputImg={inputImg}
                        aspect={16 / 9}
                        width={1920}
                        height={1080}
                    />
            }
        </div>
    )
}

export default connect(mapStateToPops, mapDispatchToProps)(ArticleForm);