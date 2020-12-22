import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import {verifyUser} from '../../Redux/actions/UserActions'
import {Link} from 'react-router-dom'
import axios from 'axios'

function mapDispatchToProps(dispatch) {
    return {
        verifyUser: user => dispatch(verifyUser(user))
    }
}

const Signin = ({verifyUser}) => {

    useEffect(()=> {
        document.getElementById('form-alert').style.display = "none"
    })

    const [User, setUser] = useState({
        username: "",
        password: "",
    });

    const sendData = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            data: User,
            withCredentials: true,
            url: 'http://localhost:4000/api/signin'
        })
        .then(res => {
            if(res.data.success) {
                axios.get("http://localhost:4000/api/authenticate", {
                            withCredentials: true
                        })
                .then(res => {
                    verifyUser(res.data)
                })
            }
        })
        .catch(err => {
            const error = Object.assign({}, err)
            if(error.response.data.error) {
                document.getElementById('form-alert').firstChild.innerHTML = error.response.data.error.message
                document.getElementById('form-alert').style.display = "flex"
            } else{
                console.log(error)
            }
        })
    }

    const onChangeInput = (e) => {
        setUser({
            ...User,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="row register-back">
            <Link to="/"> <i class="fas fa-chevron-left "></i></Link>
            <div className="col-md-5 mx-auto">
                <div className="card register">
                    <div className="card-header">
                        <h3>Bienvenido</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={sendData}>
                            <div class="alert alert-danger" role="alert" id="form-alert">
                                <small></small>
                            </div>

                            <div className="form-group">
                                <label for="username">Nombre de usuario</label>
                                <input type="text" className="form-control" id="username" name="username" onChange={onChangeInput}/>
                            </div>
                            <div className="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" className="form-control" id="password" name="password" onChange={onChangeInput}/>
                            </div>
                            <button type="submit" className="btn btn-info btn-lg">Iniciar Seción</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Signin);