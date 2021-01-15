import React, {useState, useRef} from 'react'
import Body from '../../Body/Body'
import ImageCropper from '../../Image-cropper/Image-cropper'
import {setBodyCard, setBodyCardBlob} from '../../../Redux/actions/bodyCardActions'
import {connect} from 'react-redux'

const mapStateToPops = state => {
    return{ bodyCard: state.bodyCardReducer.bodyCard }
}

const mapDispatchToProps = dispatch => {
    return{
        setBodyCard: bodyCard => dispatch(setBodyCard(bodyCard)),
        setBodyCardImgBlob: blob => dispatch(setBodyCardBlob(blob))
    }
}

const BodyForm = ({ bodyCard, setBodyCard, setBodyCardImgBlob}) => {
    const [inputImg, setInputImg] = useState("")

    const inputRef = useRef(null)

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
        const url = window.URL.createObjectURL(blob);
        setBodyCard([{
            ...bodyCard[0],
            defaultImg: url,
            imgInput: false
        }])
        setBodyCardImgBlob(blob)
        document.getElementById("preview-body-img").src=url
    }

    const bodyCardTextForm = (e) => {
        e.preventDefault()
        if(e.target.name !== "body-img") {
            setBodyCard([{
                ...bodyCard[0],
                [e.target.name]: e.target.value
            }])
        }
    }

    const bodyImgClick = (e) => {
        e.preventDefault()
        document.getElementById("body-input-img").click();
    }

    const bodyCardNextBtn = (e) => {
        e.preventDefault()

       e.target.classList.add('was-validated');
       if (e.target.checkValidity() === false) {
            e.stopPropagation();
        } else{
        document.getElementById('body-card-form').style.display="none"
        document.getElementById('article-form').style.display="block"
      }
    }

    return(
        bodyCard[0] &&
        <div className="row" id="body-card-form">
            <div className="col-6 offset-3">
                <div className="card mt-3 body-card-form">
                    <div className="card-header border-bottom">
                        <div className="btn-group w-100 ">
                            <button className="btn btn-outline-info active article-type py-2">Noticia</button>
                            <button className="btn btn-outline-info article-type py-2">Destacado</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="form-group d-flex flex-column" onChange={bodyCardTextForm} onSubmit={bodyCardNextBtn} noValidate>
                            <div className="form-group mb-4">
                                <label for="body-img" className="form-label">Imagen</label>
                                <div className="article-form-img">
                                    <img src="/img/default-image.jpg" alt="preview-body" className="preview-body-img" id="preview-body-img" />
                                    <div className="choose-body-img  d-flex align-items-center justify-content-center">
                                        <button className="btn btn-outline-light card-form-img-btn" onClick={bodyImgClick}>
                                            Elegir Imagen
                                        </button>
                                    </div>
                                </div>
                                {!bodyCard[0].imgInput ?
                                    <input
                                        type="file"
                                        id="body-input-img"
                                        name="body-img"
                                        accept="image/*"
                                        className="body-card-input-img form-control"
                                        ref={inputRef}
                                        onChange={inputOnChange}
                                        required
                                    />
                                    :
                                    <input
                                        type="file"
                                        id="body-input-img"
                                        name="body-img"
                                        accept="image/*"
                                        className="body-card-input-img form-control"
                                        ref={inputRef}
                                        onChange={inputOnChange}
                                    />
                                }
                                <div className="invalid-feedback">
                                    Por favor seleccione una imagen
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label for="title"  className="form-label">Titulo</label>
                                <textarea className="body-form-title text-white form-control" id="body-input-title" name="title" maxLength="105" value={bodyCard[0].title} required></textarea>
                                <div className="invalid-feedback">
                                    La noticia debe tener un titulo
                                </div>
                            </div>
                            <div className="form-group  mb-5">
                                <label for="text" className="form-label">Subtitulo</label>
                                <textarea name="text" id="body-input-text" className="body-form-text text-white form-control" maxLength="245" value={bodyCard[0].text} required></textarea>
                                <div className="invalid-feedback">
                                    La noticia debe tener un subtitulo
                                </div>
                            </div>
                            <button type="submit" className="btn-lg btn-info body-form-next" >Siguiente</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-3">
                <Body news={bodyCard}/>
            </div>
            {
                inputImg &&
                    <ImageCropper
                        callback={cropperCallback}
                        inputImg={inputImg}
                        aspect={16 / 9}
                        width={912}
                        height={513}
                    />
            }
        </div>
    )
}

export default connect(mapStateToPops, mapDispatchToProps)(BodyForm);