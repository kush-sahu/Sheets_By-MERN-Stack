
import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:3001/login', {  email, password })
        .then(result => {console.log(result)
          if(result.data === "Success"){
            navigate('/App1')
          }
        
        })
        .catch(err => console.log(err));
};



  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card2">
            <h2 className="card-title text-center">Login </h2>
            <div className="card-body py-md-4">
              <form onSubmit={handleSubmit}>
                
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
                
                <div className="d-flex flex-row align-items-center justify-content-between">
                  
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login