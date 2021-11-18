import React, { useState } from "react";

const Signup = () => {
    const [signup, setSignup] = useState({ username:"", password:"" });
    const [error, setError] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    };
    const handleSubmit = e => {
        e.preventDefault();
        // setIsLoading(true);
    };
    return (
        <div className="login">
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