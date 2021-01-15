import React, {useState} from 'react'
import Cropper from 'react-easy-crop'
import {getCroppedImg} from './Crop-image'

const ImageCropper = ({callback, inputImg, aspect, width, height}) => {
    const [blob, setBlob] = useState(null)
    const [crop, setCrop] = useState({x: 0, y:0})
    const [zoom, setZoom] = useState(1)

    const onCropComplete = async (_, croppedAreaPixels) => {
        const croppedImage = await getCroppedImg(
            inputImg,
            croppedAreaPixels,
            width,
            height
        )
        setBlob(croppedImage)
    }

    const handleSubmitImage = (e) => {
        e.preventDefault()
        callback(blob)
    }

    return(
        <form onSubmit={handleSubmitImage} >
            <div className="cropper" id="cropper">
                <Cropper
                    image={inputImg}
                    crop={crop}
                    zomm={zoom}
                    aspect={aspect}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
                <button type="submit">Submit</button>
            </div>
        </form>

    )

}

export default ImageCropper