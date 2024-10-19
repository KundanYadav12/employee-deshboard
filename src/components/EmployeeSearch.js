// src/components/EmployeeSearch.js

// import React from 'react';

// const EmployeeSearch = ({ searchTerm, setSearchTerm }) => {
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search Employee by Name"
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//     </div>
//   );
// };

// export default EmployeeSearch;


// src/components/EmployeeSearch.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeSearch = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from db.json
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3001/employees');  
        setEmployees(response.data);
        setFilteredEmployees(response.data);  
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const filtered = employees.filter(emp =>
      emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);  
  }, [searchTerm, employees]);

  return (
    <div>
      <h1>Employee Search</h1>
      <input
        type="text"
        placeholder="Search Employee by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.age}</td>
              <td>{emp.gender}</td>
              <td>{emp.role}</td>
              <td>{emp.yearsOfExperience}</td>
              <td>{emp.salary}</td>
              <td>{emp.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeSearch;
