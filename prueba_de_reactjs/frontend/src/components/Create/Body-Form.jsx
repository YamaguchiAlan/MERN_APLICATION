import React, {useState, useEffect} from 'react'
import Body from '../Body/Body'

const BodyForm = () => {
    const [cardBody, setCardBody] = useState([{
        title: "jfkldjaf dafkljf lajkdf",
        text: "dlkfjadkfljñdslk jkldfjkladsfjd jkldjla bklcajdkdj lajdkajd ldjfkadfjdkalfjdlk kdfjla",
        author: "Alan Yamaguchi",
        createdAt: Date.now() ,
        image: "./img/preview.png"
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
                    image: url
                }])
                document.getElementById("preview-body-img").src=url
            }
        }
    }

    const bodyImgClick = () => {
        document.getElementById("body-input-img").click();
    }

    return(
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card mt-3 body-card-form">
                    <div className="card-header border-bottom">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <h4 className="font-weight-bold article-type">Selecciona el tipo de articulo: </h4>
                            </div>
                            <div className="col-6 btn-group">
                                <button className="btn btn-outline-info active article-type">Noticia</button>
                                <button className="btn btn-outline-info article-type">Destacado</button>
                                <button className="btn btn-outline-info article-type">Trending</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="form-group d-flex flex-column" onChange={bodyCardTextForm}>
                            <label for="body-img" className="body-img-label"><small>Click sobre la imagen para seleccionar</small></label>
                            <img src="./img/preview.png" alt="preview-body" className="preview-body-img mb-2 ml-3" id="preview-body-img" onClick={bodyImgClick}/>
                            <input type="file" id="body-input-img" name="body-img" className="body-card-input-img" />
                            <label for="title"  className="body-title-label">Titulo</label>
                            <textarea className="body-form-title bg-secondary text-white form-control" id="title" name="title" maxLength="105"></textarea>
                            <label for="text" className="body-text-label">Texto</label>
                            <textarea name="text" id="text" className="body-form-text  bg-secondary text-white form-control" maxLength="245"></textarea>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-3">
                <Body news={cardBody}/>
            </div>
        </div>
    )
}

export default BodyForm;