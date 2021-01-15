import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Activity = ({id}) => {
    useEffect(() => {
        axios.get(`http://localhost:4000/api/user-activity/${id}`)
        .then(res => console.log(res.data))
    })

    return(
        <div className="activity">
            <p className="activity-title">Activity</p>
            <div className="activity-card">
                <span className="date">
                    1 week ago
                </span>
                <p className="activity-text">
                    Yamaguchi made a comment in an article <br/>
                    Dishonored 2 and Prey on sale...
                </p>
            </div>
        </div>
    )
}

export default Activity