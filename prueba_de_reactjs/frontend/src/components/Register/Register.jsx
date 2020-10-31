import React, { useState } from 'react'
import './Register.css'

const Register = () => {

    const [User, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const sendData = (e) => {
        e.preventDefault();
        console.log(User);
    }

    const onChangeInput = (e) => {
        setUser({
            ...User,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="signup-body">
            <div className="row">
            <div className="col-md-5 mx-auto">
                <div className="card ">
                    <div className="card-header">
                        <h3>Crea una cuenta</h3>  
                    </div>
                    <div className="card-body">
                        <form >
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group ">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
            </div>
        </div>

    )
}

export default Register;