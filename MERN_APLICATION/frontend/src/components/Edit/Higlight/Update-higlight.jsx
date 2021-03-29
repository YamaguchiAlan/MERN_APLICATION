import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {setHiglight, setHiglightBlob, resetHiglightData} from '../../../Redux/actions/higligthsActions'
import ImageCropper from '../../Image-cropper/Image-cropper'

const mapStateToPops = state => {
    return {
        higlight: state.higlightsReducer.higlight,
        higlightBlob: state.higlightsReducer.higlightBlob,
        verified: state.userReducer.user.verified
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setHiglight: higlight => dispatch(setHiglight(higlight)),
        setHiglightBlob: blob => dispatch(setHiglightBlob(blob)),
        resetHiglightData: () => dispatch(resetHiglightData())
    }
}

const UpdateHiglight = ({higlight, higlightBlob, setHiglight, setHiglightBlob, resetHiglightData, verified}) => {
    const [inputImg, setInputImg] = useState("")
    const [inputChange, setInputChange] = useState(false)

    const [imgWidth, setImgWidth] = useState(400)
    const [imgHeight, setImgHeight] = useState(400)

    const history = useHistory()

    useEffect(() => {
        if(verified){
            if(higlight.heightAspect === 2){
                setImgHeight(800)
            } else{
                const aspect = higlight.widthAspect / higlight.heightAspect
                setImgWidth(400 * aspect)
            }
        } else{
            history.push("/")
        }
    }, [higlight])

    const higlightInputClick = (e) => {
        e.preventDefault()
        document.getElementById("higlight-img-input").click()
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
        setInputChange(true)

        setHiglightBlob(blob)

        const url = window.URL.createObjectURL(blob)
        document.getElementById('preview-higlight-img').src=url;
    }

    const textAreaOnChange = (e) => {
        e.target.style.height = "1px";
        e.target.style.height = e.target.scrollHeight +"px";

        setHiglight({
            ...higlight,
            title: e.target.value
        })
    }

    const showNewsSelector = (e) => {
        e.preventDefault()

        document.getElementById("update-higlight-form").style.display="none"
        document.getElementById("select-news").style.display="block"
    }

    const backBtn = () => {
        resetHiglightData()

        document.getElementById("higlight-back").style.display="flex"
        document.getElementById("update-higlight-header").style.display="block"
        document.getElementById("update-higlight-form").style.display="none"
    }

    const higlightSubmit = (e) => {
        e.preventDefault()

        if(higlight.news._id){
            document.getElementById("select-news-input").value=higlight.news._id
        }

        e.target.classList.add('was-validated');
        if (e.target.checkValidity() === false) {
            e.stopPropagation();
        } else{
            axios.put(`/higlight`, higlight)
            .then(res => {
                if(res.data.success){
                    if(inputChange){
                        let data = new FormData()
                        data.append('higlight-pic', higlightBlob)

                        axios.put(`/higlight/${higlight.index}/pic`, data, {
                            headers: {'Content-Type': 'multipart/form-data'}
                        })
                        .then(res => {
                            if(res.data.success){
                                history.push("/")
                            }
                        })
                    } else{
                        history.push("/")
                    }
                }
            })
        }
    }

    return(
        <div id="update-higlight-form">
            <div className="row mw-100">
                <div className="col-xl-6 col-lg-8 col-md-10 col-12 mx-md-auto px-3 mr-3 ml-4 update-higlight-form-col">
                    <div className="card body-card-form">
                        <div className="card-header border-bottom ">
                            <div className="back-higlight-form d-flex align-items-center">
                                <i class="fas fa-chevron-left" id="higlight-form-back-btn" onClick={backBtn}></i>
                                <div className="back-btn-text">
                                    <span>Go Back</span>
                                </div>
                            </div>

                            <h2 className="text-center">Update Higlight</h2>
                        </div>
                        <div className="card-body">
                            <form className="d-flex flex-column" onSubmit={higlightSubmit} noValidate>
                                <div className="form-group  mb-4">
                                    <label for="higlight-img" style={{fontSize: "1.6rem"}}>Image</label>
                                    <div className="higlight-form-img">
                                        <img src={higlight.image} alt="preview-higlight" className="preview-higlight-img" id="preview-higlight-img"/>
                                        <div className="choose-higlight-img  d-flex align-items-center justify-content-center">
                                            <button className="btn btn-outline-light higlight-img-btn" id="higlight-img-btn" onClick={higlightInputClick}>
                                                Choose Image
                                            </button>
                                        </div>
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="higlight-img"
                                        className="higlight-input-img d-none form-control"
                                        id="higlight-img-input"
                                        onChange={inputOnChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <p className="higlight-form-link">Link to:<span> {higlight.news.title}</span></p>

                                    <button className="btn btn-light choose-article-btn" onClick={showNewsSelector} style={{fontSize: "1.2rem"}}>
                                        Choose Article
                                    </button>
                                    <input type="text" className="d-none" id="select-news-input" required />
                                    <div className="invalid-feedback">
                                        The higlight must have an associated news
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="title" style={{fontSize: "1.6rem"}}>Title</label>
                                    <textarea
                                        className="body-form-title form-control"
                                        name="title" maxLength="105" id="higlight-form-title"
                                        value={higlight.title} onChange={textAreaOnChange}>
                                    </textarea>
                                </div>
                                <button type="submit" className="btn-lg btn-info higlight-form-submit" >Update Higlight</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            { inputImg &&
                <ImageCropper
                    callback={cropperCallback}
                    inputImg={inputImg}
                    aspect={higlight.widthAspect / higlight.heightAspect}
                    width={imgWidth}
                    height={imgHeight}
                />
            }
        </div>
    )
}

export default connect(mapStateToPops, mapDispatchToProps)(UpdateHiglight)