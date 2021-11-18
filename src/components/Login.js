import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";


const Login = () => {
    const { push } = useHistory();

    const [login, setLogin] = useState({ username:"",password:"" });
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        setError(false);
        setLogin({ ...login, [e.target.name]: e.target.value })
    };
    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        axios.post(`${BASE_URL}/auth/login`, login)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                push("/view");
            })
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    };
    
    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading"></div>
            </div>
           
        )
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name="username"
                    placeholder="username"
                    value={login.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name="password"
                    placeholder="password"
                    value={login.password}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
            {error ? <p style={{color: "red"}}>invalid login</p> : ""}
        </div>
    )
};

export default Login;