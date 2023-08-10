import React from "react";
import { useState } from "react";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(username)
    }

    return (
        <>
            <form className="loginform" onSubmit={handleSubmit}>
                <h1>Welcome to Connect</h1>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={handleUsername} type="username" placeholder="username" id="usernamelogin" />

                <label htmlFor="password">Password</label>
                <input value={password} onChange={handlePassword} type="password" placeholder="*********" id="passwordlogin" />

                <button type="submit">Sign In</button>
            </form>

            <button>Don't have an Account? Register here.</button>
        </>
    )
}

export default Login