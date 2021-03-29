import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import HiglightGrid from './Higlights-Grid';

const defaultNews = [{
        image: "/img/header/default-image-1X1.jpg",
        widthAspect: 1,
        heightAspect: 1,
        index: 0,
        news: ""
    },
    {
        image: "/img/header/default-image-57X25.jpg",
        widthAspect: 57,
        heightAspect: 25,
        index: 1,
        news: ""
    },
    {
        image: "/img/header/default-image-1X2.jpg",
        className: "advertising",
        widthAspect: 1,
        heightAspect: 2,
        index: 2,
        news: ""
    },
    {
        image: "/img/header/default-image-19X12.jpg",
        widthAspect: 19,
        heightAspect: 12,
        index: 3,
        news: ""
    },
    {
        image: "/img/header/default-image-19X12.jpg",
        widthAspect: 19,
        heightAspect: 12,
        index: 4,
        news: ""
    },
    {
        image: "/img/header/default-image-1X2.jpg",
        className: "white-space",
        widthAspect: 1,
        heightAspect: 2,
        index: 5,
        news: ""
    },
]

const Higlights = ({editMode}) =>{
    useEffect(() => {
        Axios.get("/higlights")
        .then(res => {
            let news = defaultNews

            for(let i = 0; i < 6; i++){
                res.data.forEach(e => {
                    if(e.index === i){
                        news[i] = e
                    }
                })
            }

            setNews(news)
        })
    },[])

    const [News, setNews] = useState([]);

    return(
        <div className="higlight-back" id="higlight-back">
            <div className="higlight">

                <HiglightGrid news={News} editMode={editMode}/>

            </div>
        </div>
    )
}
export default Higlights;