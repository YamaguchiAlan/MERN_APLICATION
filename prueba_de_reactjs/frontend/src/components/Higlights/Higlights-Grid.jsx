import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {setHiglight} from '../../Redux/actions/higligthsActions'

const mapDispatchToProps = dispatch => {
    return { setHiglight: higlight => dispatch(setHiglight(higlight))}
}

const HiglightsGrid = ({news, editMode, setHiglight}) =>{

    const goToEditHihlight = (higlight) => {
        setHiglight(higlight)

        document.getElementById("higlight-back").style.display="none"
        document.getElementById("update-higlight-header").style.display="none"
        document.getElementById("update-higlight-form").style.display="block"
    }

    return(
        /* Each component have a unique class modified by css */
        news.map(props =>
            editMode ?
            <div className={props.className} id="body-head-grid" onClick={() => goToEditHihlight(props)}>
                <a className="img-back" style={{cursor: "pointer"}}>
                    <img src={props.image} alt="Body-head-img"/>
                    <p className="title">{props.title}</p>
                </a>
            </div>
            :
            <div className={props.className} id="body-head-grid">
                <Link to={`/article/${props.news._id}`} className="img-back">
                    <img src={props.image} alt="Body-head-img"/>
                    <p className="title">{props.title}</p>
                </Link>
            </div>
        )
    )
}

export default connect(null, mapDispatchToProps)(HiglightsGrid);