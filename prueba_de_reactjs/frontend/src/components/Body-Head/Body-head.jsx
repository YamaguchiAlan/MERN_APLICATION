import React, {useEffect, useState} from 'react';
import BodyHeadGrid from './Body-Head-Grid';


const BodyHead = () =>{
    useEffect(() => {
        fetch("http://localhost:4000/api/featured", {method: 'GET'})
        .then(response => response.json())
        .then(data => setNews(data))
    },[])

    const [News, setNews] = useState([]);

    return(
        <div className="body-head-back">
            <div className="body-head">
                {News.map( c =>
                <BodyHeadGrid image={c.image}
                    title={c.title}
                    className={c.className}
                /> )}
            </div>
        </div>
    )
}
export default BodyHead;