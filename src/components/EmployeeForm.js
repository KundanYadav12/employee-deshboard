 


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../redux/actions/employeeActions';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    role: '',
    yearsOfExperience: '',
    salary: '',
    address: '',
  });
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
    dispatch(createEmployee(formData));
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      role: '',
      yearsOfExperience: '',
      salary: '',
      address: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>Role</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Years of Experience</label>
        <input
          type="number"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Salary</label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;

