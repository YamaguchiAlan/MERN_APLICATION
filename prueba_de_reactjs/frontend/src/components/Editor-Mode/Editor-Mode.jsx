import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditBody from '../Body/Edit-Body'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const EditorMode = () => {
    useEffect(() => {
        axios.get('http://localhost:4000/api/news')
        .then(res => setNews(res.data))
    }, [])

    const [News, setNews] = useState([])

    return(
        <>
            <Header editMode={true}/>
            <div className="edit-body w-100 d-flex flex-column align-items-center pr-md-3 mt-2">
                <EditBody news={News}/>
            </div>
            <Footer/>
        </>
    )
}

export default EditorMode