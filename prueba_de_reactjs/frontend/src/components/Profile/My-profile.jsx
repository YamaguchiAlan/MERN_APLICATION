import React, {useEffect, useState, useRef} from 'react'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {verifyUser, logout} from '../../Redux/actions/UserActions'
import {useHistory} from 'react-router-dom'

import ImageCropper from '../Image-cropper/Image-cropper'
import axios from 'axios'
import Activity from './Ativity'

const mapStateToProps = state => {
    return {
        username: state.userReducer.user.username,
        followers: state.userReducer.user.followers,
        following: state.userReducer.user.following,
        id: state.userReducer.user._id,
        date: state.userReducer.user.updatedAt
    }
}

const mapDispatchToProps = dispatch => {
    return {
        verifyUser: user => dispatch(verifyUser(user)),
        logout: () => dispatch(logout())
    }
}

const MyProfile = ({username, id, followers, following, date, verifyUser, logout}) => {
    const [inputImg, setInputImg] = useState("")

    const inputRef = useRef(null)

    const history = useHistory()

    useEffect(() => {
        axios.get("http://localhost:4000/api/authenticate", {
            withCredentials: true
        })
        .then(res => {
            verifyUser({
              ...res.data,
              verified: true
            })
        })
        .catch(err => history.push("/"))

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
        axios.put(`http://localhost:4000/api/upload-user-image/${id}`, data)
        .then(async res => {
            if(res.data.succes) {
                const res = await axios.get("http://localhost:4000/api/authenticate", {
                    withCredentials: true
                })

                verifyUser({
                    ...res.data,
                    verified: true
                })
            }
        })
    }

    const logoutUser = async () => {
        const res = await axios.get("http://localhost:4000/api/logout", {
            withCredentials: true
        })

        if(res.data.success) {
            axios.get("http://localhost:4000/api/authenticate", {
                withCredentials: true
            })
            .catch(err => {
                logout()
                history.push("/")
            })
        }
    }

    return(
        <>
            <Header/>

            <div className="d-flex justify-content-center" style={{marginTop: 50 + 'px'}}>
                <div className="w-50" style={{transform: "translateX(5%)"}}>
                    <div className="profile-pic-back">
                        <img src={id ? `http://localhost:4000/api/user-image/${id}?${date}` : "/img/profile-pic.png"} alt="profile-image" className="rounded " id="my-profile-pic"/>
                        <input type="file" accept="image/*" ref={inputRef} className="d-none" onChange={inputOnChange}/>
                    </div>
                    <div className="my-profile-back">
                        <p>
                            <span className="profile-username">{username}</span>
                            <br/>
                            <span className="profile-followers">{`Following(${following.length})`}</span>
                            <span className="profile-followers ml-4">{`Followers(${followers.length})`}</span>
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

            <Activity id={id} username={username} />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)