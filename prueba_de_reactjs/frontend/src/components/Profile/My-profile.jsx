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
        if(user.verified == false) {
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
        axios.put(`http://localhost:4000/api/upload-user-image/${user._id}`, data)
        .then(async res => {
            if(res.data.succes) {
                verifyUser()
            }
        })
    }

    const logoutUser = async () => {
        const res = await axios.get("http://localhost:4000/api/logout", {
            withCredentials: true
        })

        if(res.data.success) {
            verifyUser()
            history.push("/")
        }
    }

    return(
        <>
            <Header/>

            <div className="d-flex justify-content-center" style={{marginTop: 50 + 'px'}}>
                <div className="w-50" style={{transform: "translateX(5%)"}}>
                    <div className="profile-pic-back">
                        <img src={user._id ? `http://localhost:4000/api/user-image/${user._id}?${user.updatedAt}` : "/img/profile-pic.png"} alt="profile-image" className="rounded " id="my-profile-pic"/>
                        <input type="file" accept="image/*" ref={inputRef} className="d-none" onChange={inputOnChange}/>
                    </div>
                    <div className="my-profile-back">
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
                        <div >
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