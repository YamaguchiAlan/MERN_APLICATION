import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import Activity from './Ativity'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {id: state.userReducer.user._id}
}

const MyProfile = ({ match, id}) => {
    const [user, setUser] = useState({following: [], followers: []})

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
            }
        })
    }

    const unfollow = () => {
        axios.put(`http://localhost:4000/api/unfollow-user/${id}`, {user:  user._id})
        .then(res => {
            if(res.data.success){
                const newUser = user
                newUser.followers = newUser.followers.filter(e => e != id)
                setUser({...newUser})
            }
        })
    }

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
                            <span className="profile-followers">{`Following(${user.following && user.following.length})`}</span>
                            <span className="profile-followers ml-4">{`Followers(${user.followers && user.followers.length})`}</span>
                        </p>

                        <div>
                        {   user.followers &&
                            user.followers.includes(id) ?
                                <button className="profile-btn" onClick={unfollow}>Unfollow</button>
                            :
                                <button className="profile-btn" onClick={follow}>Follow</button>
                        }

                            <span className="profile-report">Report Profile</span>
                        </div>

                </div>
                </div>
            </div>

            <Activity id={match.params.id}/>
        </>
    )
}

export default connect(mapStateToProps)(MyProfile)