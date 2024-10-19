import { GET_EMPLOYEES, CREATE_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from '../actions/employeeActions';

const initialState = {
  employees: []
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return { ...state, employees: action.payload };
    case CREATE_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.payload] };
    case DELETE_EMPLOYEE:
      return { ...state, employees: state.employees.filter(emp => emp.id !== action.payload) };
      case UPDATE_EMPLOYEE:
        return { ...state, employees: state.employees.map(emp => emp.id === action.payload.id ? action.payload : emp)
        };
      default:
      return state;
  }
}
