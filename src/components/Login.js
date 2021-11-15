import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const tokenAuthorization = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: { authorization: token },
        baseURL: BASE_URL
    });
};

const Login = () => {
    const [login, setLogin] = useState({ username:"",password:"" });

    const handleChange = e => setLogin({ ...login, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`${BASE_URL}/auth/login`, login)
            .then(res => console.log(res)) // localStorage.setItem("token", res.data)
            .catch(err => console.error(err));
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="username"
                    value={login.username}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    placeholder="password"
                    value={login.password}
                    onChange={handleChange}
                />
                <button>Login</button>
                <button>Create Account</button>
            </form>
        </div>
        
    )
};

export default Login;