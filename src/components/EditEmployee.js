import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateEmployee, getEmployees } from '../redux/actions/employeeActions';

const EditEmployee = () => {
  const { id } = useParams(); // Get the employee ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = useSelector((state) =>
    state.employeeData.employees.find((emp) => emp.id === parseInt(id))
  );

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

  useEffect(() => {
    if (employee) {
      setFormData(employee);  
    }
  }, [employee]);

  useEffect(() => {
    dispatch(getEmployees());  
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee({ ...formData, id: parseInt(id) }));  
    navigate('/');  
  };

  return (
    <div>
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Role</label>
          <input type="text" name="role" value={formData.role} onChange={handleChange} />
        </div>
        <div>
          <label>Years of Experience</label>
          <input type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} />
        </div>
        <div>
          <label>Salary</label>
          <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
