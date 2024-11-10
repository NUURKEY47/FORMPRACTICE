import React from "react";
import './App.css';

export default function App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPass: "",
        joinNewsletter: false 
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target; 

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value 
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.password === formData.confirmPass) {
            console.log('Successfully signed up');
        } else {
            console.log('Passwords do not match'); // e
        }
    }
    // console.log(formData)
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    className="form--input"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    className="form--input"
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    name="confirmPass"
                    onChange={handleChange}
                    value={formData.confirmPass}
                    className="form--input"
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinNewsletter"
                        onChange={handleChange}
                        checked={formData.joinNewsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
}
