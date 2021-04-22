import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./RegisterScreen.css"
import axios from "axios"

function RegisterScreen({ history }) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        if(localStorage.getItem("authToken")) {
            history.push("/")
        }
    }, [history])

    const registerHandler = async (e)  => {
        e.preventDefault()

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        if(password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("")
            }, 5000);
            return setError("Passwords do not match")
        }

        try {
            const {data} = await axios.post(
                "/api/auth/register",
                {username, email, password},
                config
            )

            localStorage.setItem("authToken", data.token);
            history.push("/")
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("")
            }, 5000)
            
        }
    }
    return (
        <div className="register-screen">
            <form onSubmit={registerHandler} className="register-screen__form">
                <h3 className="register-screen__title">Register</h3>
                {error && <span className="error-message">{error}</span>}
                <div className="form-group">
                    <label htmlFor="name">Username: </label>
                    <input type="text" required id="name" placeholder="Enter username" value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" required id="email" placeholder="Enter email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="passwprd">Psaaword: </label>
                    <input type="password" required id="password" placeholder="Enter password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpasswprd">Confirm Psaaword: </label>
                    <input type="confirmpassword" required id="confirmpassword" placeholder="Confirm Password" value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />

                    <button type="submit" className="btn btn-primary">Register</button>

                    <span className="regsiter-screen__subtext">Already have an account? <Link to="/login">Login</Link></span>
                </div>
                
            </form>
            
        </div>
    )
}

export default RegisterScreen
