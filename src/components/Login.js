import React, { useState, useHistory } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

// For later use if needed to make requests
const tokenAuthorization = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: { authorization: token },
        baseURL: BASE_URL
    });
};

const Login = () => {
    // const { push } = useHistory();
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
                // push("/view");
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
            </form>
            {error ? <p style={{color: "red"}}>invalid login</p> : ""}
        </div>
    )
};

export default Login;