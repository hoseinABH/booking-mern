import { useState } from 'react';
// Hooks
import { useAuth } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
// Libraries
import axios from 'axios';
// Styles
import './login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { state, dispatch } = useAuth();
  const navigate = useNavigate();
  function handleChange(e) {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleClick(e) {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.response.data });
    }
  }

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button
          disabled={state.loading}
          onClick={handleClick}
          className="lButton"
        >
          Login
        </button>
        {state.error && <span>{state.error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
