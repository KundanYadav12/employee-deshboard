// import { login as apiLogin } from '../api/auth';

// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGOUT = 'LOGOUT';

// export const login = (credentials) => async (dispatch) => {
//   const token = await apiLogin(credentials);
//   localStorage.setItem('token', token);
//   dispatch({ type: LOGIN_SUCCESS, payload: token });
// };

// export const logout = () => {
//   localStorage.removeItem('token');
//   return { type: LOGOUT };
// };


// src/redux/actions/authActions.js
import axios from 'axios';


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/login', credentials);  
    const token = response.data.token;  
    localStorage.setItem('token', token);  
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response ? error.response.data.message : 'Login failed'});
  }
};
