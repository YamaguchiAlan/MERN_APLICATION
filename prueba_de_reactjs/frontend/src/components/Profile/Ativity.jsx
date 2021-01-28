import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom'

const Activity = ({id, username}) => {
    const [activity, setActivity] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/api/user-activity/${id}`)
        .then(res => setActivity(res.data.reverse()))
        .catch(err => setActivity([]))
    }, [id])

    const switchAction = (action, title, newsId) => {
        switch (action) {
            case "Comment":
                return <>
                        {username} made a comment in an article <br/>
                        <Link to={`/article/${newsId}`} className="text-truncate">{title}</Link>
                    </>
            case "Like":
                return <>
                        {username} liked a comment in an article <br/>
                        <Link to={`/article/${newsId}`} className="text-truncate">{title}</Link>

                    </>
            case "Dislike":
                return <>
                        {username} disliked a comment in an article <br/>
                        <Link to={`/article/${newsId}`} className="text-truncate">{title}</Link>
                    </>
            default:
                break;
        }
    }

    return(
        <div className="d-flex align-items-center flex-column mt-4">
            <div className="activity">
                <p className="activity-title">Activity</p>
                {
                    !activity[0] ?
                        <div className="activity-card-1">
                            <p className="activity-text">
                                There is no recent activity
                            </p>
                        </div>
                    :
                    activity.map((e, i) =>
                            <div className={(i++%2) ? "activity-card-1" : "activity-card-2" }>
                                <span className="date">
                                    {format(e.createdAt)}
                                </span>
                                <p className="activity-text">
                                    { switchAction(e.action, e.news[0].title, e.news[0]._id) }
                                </p>
                            </div>
                )}
            </div>
        </div>
    )
}

export default Activity