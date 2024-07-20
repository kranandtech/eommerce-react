import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import "./auth.css"; // Import CSS for SignUp styling

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { signUp } = useSignUp();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validate = () => {
        let validation = true;
        const newErrors = {};

        if (!email) {
            validation = false;
            newErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            validation = false;
            newErrors.email = "Email is invalid";
        }

        if (!name) {
            validation = false;
            newErrors.name = "Name is required";
        }

        if (!password) {
            validation = false;
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            validation = false;
            newErrors.password = "Password must be at least 6 characters long";
        }

        setErrors(newErrors);

        if (validation) {
            signUp({ email, password, name });
            setEmail("");
            setName("");
            setPassword("");
        }
    };

    return (
        <>
            <Navbar />
            <CategoryBar />

            <div className="signup-container">
                <div className="auth-form">
                    <h1>Sign Up</h1>
                    <div className="form-group">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            className={`form-control ${errors.name ? "error" : ""}`}
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            className={`form-control ${errors.email ? "error" : ""}`}
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className={`form-control ${errors.password ? "error" : ""}`}
                        />
                        {errors.password && <div className="error-message">{errors.password}</div>}
                    </div>
                    <button className="auth-button" onClick={validate} type="button">
                        Sign Up
                    </button>
                    <p className="auth-link">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SignUp;
