import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { followUser, unfollowUser } from "../../Redux/actions/UserActions";

const mapStateToProps = state => {
    return {
        verified: state.userReducer.user.verified,
        myFollowing: state.userReducer.user.following,
        myId: state.userReducer.user._id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        followUser: id => dispatch(followUser(id)),
        unfollowUser: id => dispatch(unfollowUser(id))
    }
}

const ViewFollowers = ({followType, id, setFollowType, myFollowing, myId, followUser, unfollowUser, verified}) => {
    const [followers, setFollowers] = useState([])

    const followRef = useRef(null)
    const unfollowRef = useRef(null)

    useEffect(() => {
         if(followType ){
            axios.get(`/users/${id}/${followType}`)
            .then(res => setFollowers(res.data))
         }
         return(() => {
             setFollowers([])
         })
    }, [followType])

    const follow = (userId) => {
        if(verified){
            axios.put(`/users/follow/${userId}`)
            .then(res => {
                if(res.data.success){
                    followUser(userId)
                    unfollowRef.current.blur()
                }
            })
        } else{
            alert("You need to login before following a user")
        }
    }

    const unfollow = (userId) => {
        axios.put(`/users/unfollow/${userId}`)
        .then(res => {
            if(res.data.success){
                unfollowUser(userId)
                followRef.current.blur()
            }
        })
    }

    return(
        followers[0] ?
            followType &&
                <div className="view-followers">
                    <div className="card bg-dark view-followers-card">
                    <img src="/img/cancel.png" alt="close-followers" className="close-followers" onClick={() => setFollowType("")}/>
                        <div className="card-header justify-content-center d-flex">
                            <h3>F{followType.slice(1)}</h3>
                        </div>
                        <div className="card-body">
                        {
                            followers.map(e =>
                                <div className="mb-3 d-flex align-items-center">
                                    <img src={`${process.env.REACT_APP_API_URL}/api/users/${e._id}/image`} alt="user-pic" className="followers-pic"/>
                                    <span className="followers-username">{e.username}</span>
                                    <div className="w-100">
                                        {
                                        e._id !== myId ?
                                            myFollowing.includes(e._id) ?
                                                <button className="profile-followers-btn-disabled" onClick={() => unfollow(e._id)} ref={unfollowRef}>Unfollow</button>
                                            :
                                                <button className="profile-followers-btn" onClick={() => follow(e._id)} ref={followRef}>Follow</button>
                                        :null
                                        }
                                    </div>
                                </div>
                            )
                        }
                        </div>
                    </div>
                </div>
        :null
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewFollowers)