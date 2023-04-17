// Import React and CSS
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file

// SignUpForm component
const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [alreadyMember, setAlreadyMember] = useState(false);
  const [username, setUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign up form submitted:', {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted:', {
      username,
      loginPassword,
    });
  };

  return (
    <div className="container">
      {alreadyMember ? (
        // Render login form
        <form className="form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            Not a member?{' '}
            <span className="link" onClick={() => setAlreadyMember(false)}>
              Sign up here
            </span>
          </p>
        </form>
      ) : (
        // Render sign-up form
        <form className="form" onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <p>
            Already a member?{' '}
            <span className="link" onClick={() => setAlreadyMember(true)}>
              Login here
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Signup;
