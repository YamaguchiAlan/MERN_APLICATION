import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import Activity from './Ativity'

const MyProfile = ({ match}) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:4000/api/user/${match.params.id}`)
        .then(res => setUser(res.data))
    },[])

    return(
        <>
            <Header/>

            <div className="d-flex justify-content-center">
                <div className="w-50">
                    <div className="profile-pic-back">
                        <img src={`http://localhost:4000/api/user-image/${user._id}`} alt="profile-image" className="rounded " id="crop-image"/>

                    </div>
                    <div className="profile-user-back">
                        <p>
                            <span className="profile-username">{user.username}</span>
                            <br/>
                            <span className="profile-followers">Followers(3)</span>
                        </p>

                        <div>
                            <button className="profile-btn">Follow</button>
                            <span className="profile-report">Report Profile</span>
                        </div>

                </div>
                </div>
            </div>

            <Activity id={match.params.id}/>
        </>
    )
}

export default MyProfile