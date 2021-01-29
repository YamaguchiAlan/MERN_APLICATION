import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ViewFollowers = ({followType, id}) => {
    const [followers, setFollowers] = useState([])

    useEffect(() => {
         if(followType ){
            axios.get(`http://localhost:4000/api/${followType}/${id}`)
            .then(res => setFollowers(res.data))
         }
    }, [followType])

    return(
        followType &&
            <div className="view-followers">
                <div className="card bg-dark">
                    <div className="card-header text-white">
                        <h3>F{followType.slice(1)}</h3>
                    </div>
                    <div className="card-body">
                    {
                        followers.map(e =>
                            <>
                                <img src={`http://localhost:4000/api/user-image/${e._id}`} alt="user-pic"/>
                                <span>{e.username}</span>
                            </>
                        )
                    }
                    </div>
                </div>
            </div>
    )
}

export default ViewFollowers