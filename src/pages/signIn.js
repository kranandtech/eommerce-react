import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import "./auth.css"; // Import CSS for Login styling

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { login } = useLogin();

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

        if (!password) {
            validation = false;
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            validation = false;
            newErrors.password = "Invalid password";
        }

        setErrors(newErrors);

        if (validation) {
            console.log("Logging in with:", email, password);
            login({ email, password });
            setEmail("");
            setPassword("");
        }
    };

    return (
        <>
            <Navbar />
            <CategoryBar />

            <div className="login-container">
                <div className="auth-form">
                    <h1>Login</h1>
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
                        Login
                    </button>
                    <p className="auth-link">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
