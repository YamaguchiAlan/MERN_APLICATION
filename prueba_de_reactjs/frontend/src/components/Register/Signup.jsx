import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import defaultImage from '../../img/default-profile-pic.jpg'
import {getCroppedImg} from '../Image-cropper/Crop-image'

const Signup = () => {
    const history = useHistory()

    useEffect(async ()=> {
        document.getElementById("username-alert").style.display="none"
        document.getElementById("email-alert").style.display="none"
        document.getElementById("password-alert").style.display="none"
        document.getElementById("confirmPassword-alert").style.display="none"
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

        if(e.target.id === "username") {document.getElementById("username-alert").style.display="none"}
        if(e.target.id === "email") {document.getElementById("email-alert").style.display="none"}

        if(e.target.id === "password" || e.target.id === "confirmPassword"){
            confirmPassword(e)
        }

    }

    const confirmPassword = (e) => {
        let confirmPassAlert = document.getElementById("confirmPassword-alert");
        let submitBtn = document.getElementById('submit-btn');

        if(e.target.id === "password") {
            if(e.target.value.length < 4){
                document.getElementById("passwordHelp").className="form text text-danger";
                submitBtn.disabled = true;
                confirmPassAlert.style.display = "none"
            } else {
                document.getElementById("passwordHelp").className="form text text-success";

                if(e.target.value !== User.confirmPassword){
                    confirmPassAlert.style.display = "flex"
                    submitBtn.disabled = true;
                } else {
                    confirmPassAlert.style.display = "none"
                    submitBtn.disabled = false;
                }
            }
        }

        if(e.target.id === "confirmPassword") {
            if(User.password.length >= 4) {

                if(User.password !== e.target.value){
                    confirmPassAlert.style.display = "flex";
                    submitBtn.disabled = true;
                } else {
                    confirmPassAlert.style.display = "none"
                    submitBtn.disabled = false;
                }
            }
        }
    }

    const sendData = (e) => {
        e.preventDefault();

        if(validateForm(e.target)) {
            axios.post('http://localhost:4000/api/signup', User)
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
                    axios.put(`http://localhost:4000/api/upload-user-image/${res.data.id}`, data)
                    .then(history.goBack())
                }
            })
            .catch(error => {
            let err = Object.assign({}, error.response.data.errors)
            if(err.username) {
                let username = document.getElementById('username-alert');
                username.style.display = "flex";
                username.firstChild.innerHTML = err.username.message;
            }
            if(err.email) {
                let email = document.getElementById('email-alert');
                email.style.display = "flex";
                email.firstChild.innerHTML = err.email.message;
            }
            })
        }
    }

    const validateForm = (e) =>{
        let username = document.getElementById("username-alert");
        let email = document.getElementById("email-alert");
        let validate = true;

        if(e.email.value.length === 0) {
            email.firstChild.innerHTML = "Introdusca un email";
            email.style.display = "flex";
            e.email.focus()
            validate = false;
        }
        if(e.username.value.length === 0) {
            username.firstChild.innerHTML = "Introdusca un nombre de usuario";
            username.style.display = "flex";
            e.username.focus();
            validate = false;
        }
        return validate;
    }

    return (
        <div className="row register-back">
            <Link to="/"> <i class="fas fa-chevron-left "></i></Link>
            <div className="col-md-5 mx-auto">
                <div className="card register">
                    <div className="card-header">
                        <h3>Crea una cuenta</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={sendData}>
                            <div className="form-group">
                                <label for="username">Nombre de usuario</label>
                                <input type="text" className="form-control" id="username" maxLength="25" onChange={onChangeInput}/>

                                <div class="alert alert-danger" role="alert" id="username-alert">
                                    <small></small>
                                </div>
                            </div>
                            <div className="form-group ">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" onChange={onChangeInput}/>

                                <div class="alert alert-danger" role="alert" id="email-alert">
                                    <small></small>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" className="form-control" id="password" maxLength="20" aria-describedby="passwordHelp" onChange={onChangeInput}/>
                                <small id="passwordHelp" className="form-text text-muted">La contraseña debe tener al menos 4 caracteres</small>

                                <div class="alert alert-danger" role="alert" id="password-alert">
                                    <small></small>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="confirmPassword">Confirma la contraseña</label>
                                <input type="password" className="form-control" id="confirmPassword" onChange={onChangeInput}/>

                                <div class="alert alert-danger" role="alert" id="confirmPassword-alert">
                                    <small>Las contraseñas no coinciden</small>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-info btn-lg" id="submit-btn" disabled="true">Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;