import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import defaultImage from '../../img/default-profile-pic.jpg'
import {getCroppedImg} from '../Image-cropper/Crop-image'
import Header from '../Header/Header'

const Signup = () => {
    const history = useHistory()

    useEffect(()=> {
        document.getElementById("confirmPassword-alert").style.display="none"

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
    }, [])

    const [User, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onChangeInput = (e) => {
        setUser({
            ...User,
            [e.target.id]: e.target.value
        })

        switch (e.target.id) {
            case "username":
                document.getElementById("username-alert").innerHTML="You must enter a username"
                e.target.classList.remove("is-invalid")
                break;
            case "email":
                document.getElementById("email-alert").innerHTML="You must enter an email"
                e.target.classList.remove("is-invalid")
                break;
            case "password":
                if(e.target.value.length >= 4){
                    document.getElementById("password-help").classList.remove("alert")
                }
                document.getElementById("confirmPassword-alert").style.display = "none"
                break;
            case "confirmPassword":
                document.getElementById("confirmPassword-alert").style.display = "none"
                break;
            default:
                break;
        }
    }

    const confirmPassword = () => {
        if(User.password.length < 4){
            document.getElementById("password-help").classList.add("alert");
            return false
        } else {
            if(User.password !== User.confirmPassword){
                document.getElementById("confirmPassword-alert").style.display = "flex"
                return false
            } else {
                return true
            }
        }
    }

    const sendData = (e) => {
        e.preventDefault()
        console.log(confirmPassword());
        e.target.classList.add('was-validated');
        if (e.target.checkValidity() === false) {
             e.stopPropagation();
         } else if(confirmPassword()){
            axios.post('/users/signup', User)
            .then(async res => {
                if(res.data.success){
                    const crop = {
                        x: 0,
                        y: 0,
                        width: 150,
                        height: 150
                    }
                    const blob = await getCroppedImg(defaultImage, crop, 150, 150,)

                    let data = new FormData()
                    data.append("user-img" , blob)
                    axios.put(`/users/image`, data)
                    .then(history.push("/"))
                }
            })
            .catch(error => {
                if(error.response){
                    let err = Object.assign({}, error.response.data.errors)
                    if(err.username) {
                        document.getElementById('username-alert').innerHTML = err.username.message;
                        document.getElementById("username").classList.add("is-invalid")
                    }
                    if(err.email) {
                        document.getElementById('email-alert').innerHTML = err.email.message;
                        document.getElementById("email").classList.add("is-invalid")
                    }
                }
            })
         }
    }

    return (
        <>
        <Header/>

        <div className="row register-back" id="signup-form">
            <div className="col-md-5 mx-auto">
                <div className="card register">
                    <div className="card-header">
                        <Link to="/"> <i class="fas fa-chevron-left " id="register-go-back-btn"></i></Link>
                        <h3 className="text-center">Create an acount</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={sendData} noValidate autoComplete="off">
                            <div className="form-group" >
                                <label for="username">Username</label>
                                <input type="text" className="form-control signin-input" id="username" maxLength="12" onChange={onChangeInput} required autoComplete="off"/>

                                <div className="invalid-feedback alert alert-danger" role="alert" id="username-alert">
                                    You must enter a username
                                </div>
                            </div>
                            <div className="form-group ">
                                <label for="email">Email</label>
                                <input type="email" className="form-control signin-input" id="email" onChange={onChangeInput} required autoComplete="off"/>

                                <div className="invalid-feedback alert alert-danger" role="alert" id="email-alert">
                                    You must enter an email
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control signin-input" id="password" maxLength="20" onChange={onChangeInput} required/>

                                <div role="alert" id="password-help">
                                    <small style={{color: "rgb(196, 196, 196)"}}>Password must contain at least 4 characters</small>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="confirmPassword">Confirm the Password</label>
                                <input type="password" className="form-control signin-input" id="confirmPassword" onChange={onChangeInput} maxLength="20" required/>

                                <div className="alert alert-danger" role="alert" id="confirmPassword-alert">
                                    Passwords don't match
                                </div>
                            </div>
                            <button type="submit" className="btn btn-info btn-lg w-100 mt-2" id="submit-btn" >Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup;