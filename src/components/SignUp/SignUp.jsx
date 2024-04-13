// import  { useState } from 'react';
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  // State variables to store the username and password
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Here, you can add your logic to handle authentication
    // For simplicity, let's just log the username and password to the console
    // console.log('Username:', username);
    // console.log('Password:', password);

    // You can send the username and password to your backend for authentication
  };
  function handleClick() {
    navigate("/sign-in");
  }
  return (
    <div className="sample">
      <card>
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              onClick={handleClick}
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </card>
    </div>
  );
};

export default SignUp;




