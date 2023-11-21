import React, { useState } from "react";
import axios from 'axios';
import './ForgotPasswordPage.css';

export default function ForgotPasswordPage(){

    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        // Handle resetting password logic here
        // Use axios or any other method to send a request to the server
        axios.post('http://127.0.0.1:5000/reset-password', {
            email: email
        })
        .then(function (response) {
            console.log(response);
            // Show success message or redirect the user accordingly
        })
        .catch(function (error) {
            console.log(error);
            // Show error message if there's an issue with resetting the password
        });
    }

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Enter your email"
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleResetPassword}>Reset Password</button>
            </form>
        </div>
    );
}
