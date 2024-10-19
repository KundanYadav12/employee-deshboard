// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getEmployees, deleteEmployee } from '../redux/actions/employeeActions';
// import EmployeeForm from './EmployeeForm';
// import "./EmployeeDashboard.css";

// const EmployeeDashboard = () => {
//   const dispatch = useDispatch();
//   const employees = useSelector(state => state.employeeData.employees);

//   useEffect(() => {
//     dispatch(getEmployees());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Employee Dashboard</h1>
//       <EmployeeForm />
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(emp => (
//             <tr key={emp.id}>
//               <td>{emp.firstName}</td>
//               <td>{emp.lastName}</td>
//               <td>{emp.age}</td>
//               <td>{emp.gender}</td>
//               <td>
//                 <button onClick={() => dispatch(deleteEmployee(emp.id))}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeDashboard;



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployees, deleteEmployee } from '../redux/actions/employeeActions';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './EmployeeDashboard.css';

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employeeData.employees);
const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const handleAddEmployee = () => {
    navigate('/add');  
  };

const handleEdit = (id) => {
    navigate(`/edit/${id}`);  
  };

  const handleSearch = () => {
    navigate('/search');  
  };

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <button onClick={handleAddEmployee}>Add Employee</button>
      <button onClick={handleSearch} aria-label="Search Employees">
        <FaSearch />  
      </button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Years of Experience</th>
            <th>Salary</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.age}</td>
              <td>{emp.gender}</td>
              <td>{emp.role}</td>
              <td>{emp.yearsOfExperience}</td>
              <td>{emp.salary}</td>
              <td>{emp.address}</td>
              <td>
              <button onClick={() => handleEdit(emp.id)}>Edit</button>
                <button onClick={() => dispatch(deleteEmployee(emp.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDashboard;

