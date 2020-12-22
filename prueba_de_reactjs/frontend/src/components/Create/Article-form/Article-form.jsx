import React, {useEffect} from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import customEditor from 'yamaguchi_ckeditor-custom/build/ckeditor'

const ArticleForm = ({articleChange, articleSubmit, editorChange, articleData}) => {

    useEffect(() => {


    })

    const articleImgClick = (e) => {
        e.preventDefault()
        document.getElementById("article-input-img").click();
    }

    const articleInputImg = (e) => {
        e.preventDefault()
        const file = new File([e.target.files[0]], 'preview-article.png', {'type': 'image/png'})
        const url = window.URL.createObjectURL(file);
        document.getElementById('preview-article-img').src=url;
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
                            <textarea className="article-form-title text-white form-control" id="article-title" name="article-title" maxLength="165" required></textarea>
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
                                <input type="file" id="article-input-img" name="article-img" className="article-input-img form-control" onChange={articleInputImg} required/>
                            :
                                <input type="file" id="article-input-img" name="article-img" className="article-input-img form-control" onChange={articleInputImg}/>
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
        </div>
    )
}

export default ArticleForm;