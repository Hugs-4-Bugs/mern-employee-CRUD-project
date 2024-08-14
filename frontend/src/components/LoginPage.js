// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api'; // Import the Axios instance

// const Login = () => {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Use the useNavigate hook

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post('/login', { userName, password });
//       localStorage.setItem('token', response.data.token);
//       navigate('/dashboard'); // Redirect to the dashboard after login
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           placeholder="Username"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5005/login', {
        userName,
        password,
      });
      // Store token and redirect
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Redirect to dashboard or another protected route
    } catch (error) {
      setError('Invalid credentials');
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default LoginForm;
