import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { showDashBoard } from '../../features/counter/userSlice';
import DashBoard from '../Dashboard/DashBoard';
import './login.css';

const initialLogin = {
  username: '',
  password: '',
};

function Login() {
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const regUser = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [state, setState] = useState(initialLogin);

  const handleChange = (e) => {
    //dynamically changing obj's vlaue
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(regUser, 'regUser');
    if (regUser === null) {
      alert('please sign Up first');
      navigate('/register');
    }
    const { username, password } = regUser;
    const { username: loginName, password: loginPass } = state;

    if (username && password) {
      if (username === loginName && password === loginPass) {
        dispatch(showDashBoard(true));
        navigate('/dashboard');
        console.log('keys matched', username, loginName);
      } else {
        alert('details not matched');
      }
    }

    setState(initialLogin);
  };

  return (
    <div className='login'>
      <h4>Login Form</h4>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type='text'
          value={state.username}
          onChange={(e) => handleChange(e)}
          name='username'
          id='username'
          placeholder='User Name'
        />

        <input
          type='password'
          value={state.password}
          onChange={(e) => handleChange(e)}
          name='password'
          id='password'
          placeholder='password'
        />
        <button className='btn btn-login'>Login</button>
      </form>
    </div>
  );
}

export default Login;
