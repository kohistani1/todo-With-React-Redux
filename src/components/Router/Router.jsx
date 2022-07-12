import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import DashBoard from '../Dashboard/DashBoard';
import Home from '../Home/Home';
import Login from '../LogIn/Login';
import SignUP from '../LogIn/SignUp';

function Router() {
  const isDashboard = useSelector((s) => s.user.isDashboard); //the user is the key we defined in store.
  console.log('is dash'.isDashboard);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='dashboard'
          element={isDashboard ? <DashBoard /> : <Home />}
        />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<SignUP />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default Router;
