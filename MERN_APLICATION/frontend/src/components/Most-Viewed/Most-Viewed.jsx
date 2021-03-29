import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MostViewed = ({main}) => {
    const [mostViewed, setMostViewed] = useState([])

    useEffect(() => {
        axios.get(`/news?filter=most-viewed&limit=${main ? 8 : 4}`)
        .then(res => setMostViewed(res.data))
    }, [])

    return(
        <div className="card bg-dark text-white most-viewed" id="most-viewed">
            <div className="card-header text-center most-viewed-header">
                <h3>The Most Viewed</h3>
            </div>
            <div className="card-body most-viewed-body py-2">
                <div className="row">
                    {
                        mostViewed.map((news, i) =>
                            <div className={`col-lg-3 col-sm-6 px-xl-2 px-sm-1 px-3 ${i >= 4 && "mt-3"} ${i >= 2 && "margin-top"} most-viewed-col`}>
                                <div className="card most-viewed-card border-0">
                                    <img src={`${process.env.REACT_APP_API_URL}/api/news/${news._id}/image`} alt="most-viewed" className="card-img most-viewed-img"/>

                                    <Link to={`/article/${news._id}`} className="card-img-overlay d-flex align-items-end">
                                        <span className="card-text most-viewed-title text-center w-100">
                                            {news.title}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MostViewed