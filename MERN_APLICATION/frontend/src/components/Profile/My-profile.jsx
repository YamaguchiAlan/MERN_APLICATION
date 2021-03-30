import React, {useEffect, useState, useRef} from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {verifyUser} from '../../Redux/actions/UserActions'
import {useHistory} from 'react-router-dom'

import ImageCropper from '../Image-cropper/Image-cropper'
import axios from 'axios'
import Activity from './Ativity'
import ViewFollowers from './View-followers'

const mapStateToProps = state => {
    return { user: state.userReducer.user }
}

const mapDispatchToProps = dispatch => {
    return { verifyUser: () => dispatch(verifyUser()) }
}

const MyProfile = ({user, verifyUser}) => {
    const [inputImg, setInputImg] = useState("")
    const [followType, setFollowType] = useState("")

    const inputRef = useRef(null)

    const history = useHistory()

    useEffect(() => {
        if(user.verified === false) {
            history.push("/")
        }
    }, [])

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

    const inputOnClick = (e) => {
        inputRef.current.click()
        e.target.blur()
    }

    const cropperCallback =  (blob) =>{
        setInputImg("")
        const data = new FormData()
        data.set("user-img", blob)
        axios.put(`/users/image`, data)
        .then(async res => {
            if(res.data.succes) {
                verifyUser()
            }
        })
    }

    const logoutUser = async () => {
        const res = await axios.get("/users/logout")

        if(res.data.success) {
            verifyUser()
            history.push("/")
        }
    }

    return(
        <>
            <Header/>

            <div className="d-flex justify-content-center mt-lg-5 mt-sm-4 mt-3">
                <div className="profile-back" >
                    <div className="profile-pic-back">
                        <img src={user._id ? `${process.env.REACT_APP_API_URL}/api/users/${user._id}/image?${user.updatedAt}` : "/img/profile-pic.png"} alt="profile-image" className="rounded " id="my-profile-pic"/>
                        <input type="file" accept="image/*" ref={inputRef} className="d-none" onChange={inputOnChange}/>
                    </div>
                    <div className="profile-user-back">
                        <p>
                            <span className="profile-username">{user.username}</span>
                            <br/>
                            <span className="profile-followers" onClick={() => setFollowType("following")}>
                                {`Following(${user.following.length})`}
                            </span>
                            <span className="profile-followers ml-4" onClick={() => setFollowType("followers")}>
                                {`Followers(${user.followers.length})`}
                            </span>
                        </p>
                        <div className="d-flex align-items-center">
                            <button className="profile-btn" onClick={inputOnClick}>Change profile picture</button>
                            <span className="profile-report" onClick={logoutUser}>Logout</span>
                        </div>
                    </div>
                </div>
                    {
                        inputImg &&
                            <ImageCropper
                                callback={cropperCallback}
                                inputImg={inputImg}
                                setInputImg={setInputImg}
                                aspect={1}
                                width={150}
                                height={150}
                            />
                    }
            </div>

            <ViewFollowers followType={followType} id={user._id} setFollowType={setFollowType}/>

            <Activity id={user._id} username={user.username} />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)