 

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EmployeeDashboard from './components/EmployeeDashboard';
import EditEmployee from './components/EditEmployee';
import EmployeeForm from './components/EmployeeForm';
import EmployeeSearch from './components/EmployeeSearch';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
 

function App() {
  return (
    <div className="App">
      <Routes>
         {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/dashboard" element={<PrivateRoute component={EmployeeDashboard} />} />
        {/* <Route path="/" element={<Navigate to="/login" />} />   */}
        <Route path="/" element={<EmployeeDashboard />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/add" element={<EmployeeForm />} />
        <Route path="/search" element={<EmployeeSearch />} />      
      </Routes>
    </div>
  );
}

export default App;

 