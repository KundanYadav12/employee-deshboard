 
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem('token'); // Check if token exists

  return token ? <Component /> : <Navigate to="/login" />; };

export default PrivateRoute;
