// Import React and CSS file
import React, { useState } from 'react';
import './signup.css'; // Make sure to adjust the path if necessary
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// Define your functional component
function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        }
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {console.log(result)
            navigate('/login')
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card2">
                        <h2 className="card-title text-center">Register </h2>
                        <div className="card-body py-md-4">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="name" placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="password" placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <Link to="/login">Login</Link>
                                    <button type="submit" className="btn btn-primary">Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the component
export default Signup;
