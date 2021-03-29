import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {resetHiglightData} from '../../../Redux/actions/higligthsActions'

import Header from '../../Header/Header'
import Higlights from '../../Higlights/Higlights'
import SelectNews from './Select-News'
import UpdateHiglight from './Update-higlight'


const mapDispatchToProps = dispatch => {
    return { resetHiglightData: () => dispatch(resetHiglightData()) }
}

const EditHighlights = ({resetHiglightData, match, location}) => {
    useEffect(() => {
        document.getElementById("update-higlight-form").style.display="none"
        document.getElementById("select-news").style.display="none"

        return(() => {
            resetHiglightData()
        })
    }, [])

    return(
        <>
            <Header editMode={true}/>

            <h1 className="text-center py-2 mb-0" id="update-higlight-header" style={{background: "rgba(0, 0, 0, 0.63)"}}>
                Choose the higlight to update
            </h1>

            <Higlights editMode={true}/>

            <UpdateHiglight/>

            <SelectNews match={match} location={location}/>
        </>
    )
}

export default connect(null, mapDispatchToProps)(EditHighlights)