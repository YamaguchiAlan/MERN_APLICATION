import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import customEditor from 'ckeditor5-custom-build/build/ckeditor'
import 'ckeditor5-custom-build/sample/styles.css'
import BodyForm from '../Body-Form';

import './Create-Article.css'

const CreateArticle = () => {

    useEffect(() => {

    }, [])



    const [article, setArticle] = useState("")

    // BodyCard

    // Article

    const editorSubmit = (e) => {
        e.preventDefault()

        const images = document.querySelectorAll('.editor .ck figure img')
        let img = [];
        if(images) {
            images.forEach(e => {
                img.push(e.currentSrc)
            })
        }
        axios.post('http://localhost:4000/api/article-form', {content: article, img: img})
    }

    const clickbtn = async () => {
        let images = document.querySelectorAll('.preview #inner img')

        const res = await axios.get('http://localhost:4000/api/article/5fadd0ff8a2a30183468bbac')
        images.forEach( (e, i) => {
            e.src = res.data.img[i]
        })
    }

    return(
        <div className="w-100 text-white new-article">
            <BodyForm/>
            <div className="row">
                <div className="col-12">
                    <div className="card bg-dark">
                        <div className="card-header">
                            <h3></h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={editorSubmit} className="editor">
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
                                            'imageTextAlternative',
                                            'imageStyle:full',
                                            'imageStyle:side'
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
                                data="<p>Hello from CKEditor 5!</p>"
                                onChange={(event, editor) => {
                                        setTimeout(() => {
                                            const data = editor.getData()
                                            setArticle(data)
                                            document.getElementById("inner").innerHTML=data;
                                            const imgSrc = document.querySelectorAll('.editor .ck figure img')
                                            const img =  document.querySelectorAll('.preview #inner img')
                                            if(imgSrc[0]) {
                                                img.forEach( (e, i) => {
                                                    e.src=imgSrc[i].currentSrc
                                                    console.log(`${imgSrc[i].parentElement.offsetHeight} px`)
                                                    e.style.width = `${imgSrc[i].offsetWidth}px`
                                                    e.parentElement.style.height = `${imgSrc[i].parentElement.offsetHeight}px`
                                                })
                                            }
                                            const editIframe = document.querySelectorAll('.editor .media');
                                            const prevIframe = document.querySelectorAll('.preview .media')

                                            if (editIframe[0]) {
                                                editIframe.forEach( (e, i) => {
                                                    let iframe = e.firstElementChild.firstElementChild
                                                    let cloneIframe = iframe.cloneNode(true)

                                                    document.getElementById('inner').replaceChild(cloneIframe, prevIframe[i])
                                                } )
                                            }
                                        },1)
                                    }}

                                />
                                <button type="submit" className="btn btn-primary btn-lg">Crear Articulo</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

                <div className="preview">
                    <h2>Content</h2>
                    <p id="form-content">{article} </p>
                    <p id="inner"></p>

                    <button onClick={clickbtn}>dfd</button>

                </div>

            </div>
    )
}

export default CreateArticle;