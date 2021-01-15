import React, {useEffect, useState, useRef} from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {verifyUser} from '../../Redux/actions/UserActions'
import ImageCropper from '../Image-cropper/Image-cropper'
import axios from 'axios'
import Activity from './Ativity'

const mapStateToProps = state => {
    return {
        username: state.user.username,
        id: state.user._id,
        date: state.user.updatedAt
    }
}

const mapDispatchToProps = dispatch => {
    return {
        verifyUser: user => dispatch(verifyUser(user))
    }
}

const ProfileUser = ({username, id, date, verifyUser}) => {
    const [inputImg, setInputImg] = useState("")

    const inputRef = useRef(null)

    useEffect(() => {


    })

    const inputOnChange = ((e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.addEventListener('load', () => {
            setInputImg(reader.result)
        }, false)

        if(file) {
            reader.readAsDataURL(file)
        }
    }
    )

    const inputOnClick = () => {
        inputRef.current.click()
    }

    const cropperCallback =  (blob) =>{
        setInputImg("")
        const data = new FormData()
        data.set("user-img", blob)
        axios.put(`http://localhost:4000/api/upload-user-image/${id}`, data)
        .then(async res => {
            if(res.data.succes) {
                const res = await axios.get(`http://localhost:4000/api/user/${id}`)

                verifyUser({
                    ...res.data,
                    verified: true
                    })
            }
        })
    }

    return(
        <>
            <Header/>

            <div className="d-flex justify-content-center">
                <div className="w-50 ">
                    <div className="profile-pic-back">
                        <img src={id? `http://localhost:4000/api/user-image/${id}?${date}` : "/image/profile-pic.png"} alt="profile-image" className="rounded " id="my-profile-pic"/>
                        <input type="file" accept="image/*" ref={inputRef} className="d-none" onChange={inputOnChange}/>
                    </div>
                    <div className="my-profile-back">
                        <p>
                            <span className="profile-username">{username}</span>
                            <br/>
                            <span className="profile-followers">Followers(3)</span>
                        </p>
                        <div >
                        <button className="profile-btn" onClick={inputOnClick}>Change profile picture</button>
                        </div>


                </div>
                </div>
                    {
                        inputImg &&
                            <ImageCropper
                                callback={cropperCallback}
                                inputImg={inputImg}
                                aspect={1}
                                width={150}
                                height={150}
                            />
                    }
            </div>

            <Activity id={id} />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser)