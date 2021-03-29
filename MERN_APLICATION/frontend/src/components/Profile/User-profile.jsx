import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import Activity from './Ativity'
import ViewFollowers from './View-followers'

import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {followUser, unfollowUser} from '../../Redux/actions/UserActions'

const mapStateToProps = state => {
    return {
        id: state.userReducer.user._id,
        verified: state.userReducer.user.verified
    }
}

const mapDispatchToProps = dispatch => {
    return {
        followUser: id => dispatch(followUser(id)),
        unfollowUser: id => dispatch(unfollowUser(id))
    }
}

const UserProfile = ({ match, id, followUser, unfollowUser, verified}) => {
    const [user, setUser] = useState({following: [], followers: []})
    const [followType, setFollowType] = useState("")

    const followRef = useRef(null)
    const unfollowRef = useRef(null)

    const history = useHistory()

    useEffect(() => {
        if(match.params.id === id){
            history.push("/my-profile")
        } else{
            axios.get(`/users/${match.params.id}`)
            .then(res => setUser(res.data))
        }
    },[])

    const follow = (e) => {
        if(verified){
            axios.put(`/users/follow/${user._id}`)
            .then(res => {
                if(res.data.success){
                    followUser(user._id)

                    const newUser = user
                    newUser.followers.push(id)
                    setUser({...newUser})
                    unfollowRef.current.blur()
                }
            })
        } else{
            alert("You need to login before following a user")
        }
    }

    const unfollow = (e) => {
        axios.put(`/users/unfollow/${user._id}`)
        .then(res => {
            if(res.data.success){
                unfollowUser(user._id)

                const newUser = user
                newUser.followers = newUser.followers.filter(e => e != id)
                setUser({...newUser})
                followRef.current.blur()
            }
        })
    }

    return(
        <>
            <Header/>

            <div className="d-flex justify-content-center mt-lg-5 mt-sm-4 mt-3">
                <div className="profile-back">
                    <div className="profile-pic-back">
                        <img src={`${process.env.REACT_APP_API_URL}/api/users/${user._id}/image`} alt="profile-image" className="rounded "/>

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
                                <button className="profile-btn-disabled" onClick={unfollow} ref={unfollowRef}>Unfollow</button>
                            :
                                <button className="profile-btn" onClick={follow} ref={followRef}>Follow</button>
                        }

                            <span className="profile-report">Report Profile</span>
                        </div>
                    </div>
                </div>
            </div>

            <ViewFollowers followType={followType} id={user._id} setFollowType={setFollowType}/>

            <Activity id={match.params.id} username={user.username}/>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)