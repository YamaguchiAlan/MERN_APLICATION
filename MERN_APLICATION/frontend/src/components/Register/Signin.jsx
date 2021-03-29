import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import {verifyUser} from '../../Redux/actions/UserActions'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import Header from '../Header/Header'

function mapDispatchToProps(dispatch) {
    return {
        verifyUser: () => dispatch(verifyUser())
    }
}

const Signin = ({verifyUser}) => {
    const history = useHistory()

    useEffect(()=> {
        document.getElementById('form-alert').style.display = "none"

        const signupForm = document.getElementById("signup-form")
        const header = document.getElementById("header")

        const inputs = document.querySelectorAll(".register .signin-input")
        inputs.forEach(element => {
            element.addEventListener("keypress", e => {
                if (e.which == 32){
                    e.returnValue = false
                }
            })
        })

        if(header){
            signupForm.style.height=`${window.innerHeight - header.offsetHeight}px`
        }

        return(() => {
            if(header){
                signupForm.style.height="initial"
            }
        })
    },[])

    const [User, setUser] = useState({
        username: "",
        password: "",
    });

    const sendData = (e) => {
        e.preventDefault()

        e.target.classList.add('was-validated');
        if (e.target.checkValidity() === false) {
             e.stopPropagation();
         } else{
            axios({
                method: 'POST',
                data: User,
                url: '/users/signin'
            })
            .then(res => {
                if(res.data.success) {
                    verifyUser()
                    history.push("/")
                }
            })
            .catch(err => {
                const error = Object.assign({}, err)
                if(error.response.data.error) {
                    document.getElementById('form-alert').firstChild.innerHTML = error.response.data.error.message
                    document.getElementById('form-alert').style.display = "flex"
                    document.getElementById('form-alert').visible = true
                } else{
                    console.log(error)
                }
            })
         }
    }

    const onChangeInput = (e) => {
        const alert = document.getElementById("form-alert")
        if(alert.visible){
            alert.style.display="none"
        }

        setUser({
            ...User,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
        <Header/>

        <div className="row register-back" id="signup-form">

            <div className="col-xl-5 col-lg-6 col-md-7 col-sm-8 col-10 signup-col mx-auto ">
                <div className="card register">
                    <div className="card-header">
                        <Link to="/"> <i class="fas fa-chevron-left " id="register-go-back-btn"></i></Link>
                        <h3 className="text-center">Welcome</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={sendData} noValidate>
                            <div class="alert alert-danger" role="alert" id="form-alert" visible={false}>
                                <small></small>
                            </div>

                            <div className="form-group">
                                <label for="username">Username</label>
                                <input type="text" className="form-control signin-input" id="username" name="username" maxLength="12" onChange={onChangeInput} required/>
                                <div className="invalid-feedback alert alert-danger" role="alert">
                                    You must enter your Username
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control signin-input" id="password" maxLength="20" name="password" onChange={onChangeInput} required/>
                                <div className="invalid-feedback alert alert-danger" role="alert">
                                    You must enter your Password
                                </div>
                            </div>
                            <button type="submit" className="btn btn-info btn-lg w-100 mt-2">Login</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default connect(null, mapDispatchToProps)(Signin);