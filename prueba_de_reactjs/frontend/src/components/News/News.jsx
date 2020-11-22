import React, {useState, useEffect} from 'react';
import Body from '../Body/Body'
import Footer from '../Footer/Footer';
import './News.css'

const News = () =>  {
    useEffect(() => {
        fetch("http://localhost:4000/api/news", {method: 'GET'})
        .then(response => response.json())
        .then(data => setNews(data))
      },[]);
    
      const [News, setNews] = useState([]);

    return(
    <div className="News">
        <Body news={News}/>
        <Footer/>
    </div>
)
}    

export default News;