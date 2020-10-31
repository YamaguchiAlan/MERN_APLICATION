import React, {useEffect, useState} from 'react';
import './Body-Head.css'
import BodyHeadGrid from './Body-Head-Grid/Body-Head-Grid';


const BodyHead = () =>{
    useEffect(() => {
        fetch("http://my-json-server.typicode.com/YamaguchiAlan/JSON-db/BodyHeadArr", {method: 'GET'})
        .then(response => response.json())
        .then(data => setNews(data))
    },[])

    const [News, setNews] = useState([]);

    return(
        <div className="body-head-back">
            <div className="body-head">
                {News.map( c => 
                <BodyHeadGrid img={c.img} 
                    title={c.title} 
                    class={c.class} 
                    url={c.url} 
                /> )}
            </div>
        </div>
    )
}
export default BodyHead;