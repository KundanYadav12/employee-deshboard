import axios from 'axios';

// Action types
export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

// Action to fetch employees
export const getEmployees = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3001/employees');
  dispatch({ type: GET_EMPLOYEES, payload: res.data });
};

// Action to create an employee
export const createEmployee = (employee) => async (dispatch) => {
  const res = await axios.post('http://localhost:3001/employees', employee);
  console.log(res.data);
  dispatch({ type: CREATE_EMPLOYEE, payload: res.data });
};

// Action to delete an employee
export const deleteEmployee = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/employees/${id}`);
  dispatch({ type: DELETE_EMPLOYEE, payload: id });
};

// Action to update an employee
export const updateEmployee = (employee) => async (dispatch) => {
    const res = await axios.put(`http://localhost:3001/employees/${employee.id}`, employee);
    dispatch({ type: UPDATE_EMPLOYEE, payload: res.data });
  };
