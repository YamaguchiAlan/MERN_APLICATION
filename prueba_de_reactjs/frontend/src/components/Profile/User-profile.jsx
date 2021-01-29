import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import Activity from './Ativity'
import {connect} from 'react-redux'
import ViewFollowers from './View-followers'

const mapStateToProps = state => {
    return {id: state.userReducer.user._id}
}

const UserProfile = ({ match, id}) => {
    const [user, setUser] = useState({following: [], followers: []})

    const followRef = useRef()
    const unfollowRef = useRef()

    useEffect(() => {
        axios.get(`http://localhost:4000/api/user/${match.params.id}`)
        .then(res => setUser(res.data))
    },[])

    const follow = () => {
        axios.put(`http://localhost:4000/api/follow-user/${id}`, {user:  user._id})
        .then(res => {
            if(res.data.success){
                const newUser = user
                newUser.followers.push(id)
                setUser({...newUser})
                unfollowRef.current.blur()
            }
        })
    }

    const unfollow = (e) => {
        axios.put(`http://localhost:4000/api/unfollow-user/${id}`, {user:  user._id})
        .then(res => {
            if(res.data.success){
                const newUser = user
                newUser.followers = newUser.followers.filter(e => e != id)
                setUser({...newUser})
                followRef.current.blur()
            }
        })
    }

    const [followType, setFollowType] = useState("")

    return(
        <>
            <Header/>

            <div className="d-flex justify-content-center" style={{marginTop: 50 + 'px'}}>
                <div className="w-50" style={{transform: "translateX(5%)"}}>
                    <div className="profile-pic-back">
                        <img src={`http://localhost:4000/api/user-image/${user._id}`} alt="profile-image" className="rounded "/>

                    </div>
                    <div className="profile-user-back">
                        <p>
                            <span className="profile-username">{user.username}</span>
                            <br/>
                            <span className="profile-followers" onClick={() => setFollowType("following")}>
                                {`Following(${user.following && user.following.length})`}
                            </span>
                            <span className="profile-followers ml-4" onClick={() => setFollowType("followers")}>
                                {`Followers(${user.followers && user.followers.length})`}
                            </span>
                        </p>

                        <div>
                        {   user.followers &&
                            user.followers.includes(id) ?
                                <button className="profile-btn" onClick={unfollow} ref={unfollowRef}>Unfollow</button>
                            :
                                <button className="profile-btn" onClick={follow} ref={followRef}>Follow</button>
                        }

                            <span className="profile-report">Report Profile</span>
                        </div>

                </div>
                </div>
            </div>

            <ViewFollowers followType={followType} id={user._id}/>

            <Activity id={match.params.id}/>
        </>
    )
}

export default connect(mapStateToProps)(UserProfile)