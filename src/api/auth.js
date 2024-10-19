import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Replace with your API URL

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data.token; // Assuming the token is returned in the response
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
