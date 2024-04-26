import { useState } from 'react';
import { Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isUserFound, setUserFound] = useState(false);
  // User Login info
  const database = [
    {
      username: "admin",
      password: "demo"
    }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = database.find((user) => user.username === username && user.password === password);
    if(!userData) {
      setUserFound(true)
    } else {
      setUserFound(false)
      navigate("/notes");
    }
  };

  return (
    <div className='login-container'>
      <h2 style={{textAlign: "center", marginBottom: "20px"}}>Login Page</h2>
      <Card className='login-card'>
        <Card.Body>
          {isUserFound && 
            <Alert key="danger" variant="danger">User not found!!</Alert>
          }
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <label className="form-label">User</label>
              <input type="text" name="username" className="form-control" value={username} onChange={(e) => setUser(e.target.value)} required />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Password</label>
              <input type="password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login