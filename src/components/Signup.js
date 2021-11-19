import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../config";
import { useHistory } from "react-router";

const Signup = () => {
    const { push } = useHistory();
    const [signup, setSignup] = useState({ username:"", password:"" });
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    };
    const handleSubmit = e => {
        e.preventDefault();
        // setIsLoading(true);
        axios.post(`${BASE_URL}/auth/signup`, signup)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token);
                push("/view");
            })
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    };
    return (
        <div className="login signup">
             <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="username"
                    value={signup.username}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    placeholder="password"
                    value={signup.password}
                    onChange={handleChange}
                />
                <button>Sign up</button>
            </form>
            {error ? <p style={{color: "red"}}>invalid login</p> : ""}
        </div>
    )
};

export default Signup;