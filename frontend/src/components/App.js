// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = 'http://localhost:5005'; // Backend URL

// // Example component for login
// const Login = ({ onLogin }) => {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(`${API_URL}/auth/login`, { userName, password });
//       localStorage.setItem('token', response.data.token);
//       onLogin(); // Notify parent about successful login
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// // Example component for managing employees
// const EmployeeManagement = () => {
//   const [employees, setEmployees] = useState([]);
//   const [newEmployee, setNewEmployee] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: '',
//     image: null,
//   });
//   const [editingEmployee, setEditingEmployee] = useState(null);

//   // Fetch all employees
//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/employees`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`, // Use the token from login
//           },
//         });
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleCreateEmployee = async () => {
//     const formData = new FormData();
//     Object.keys(newEmployee).forEach(key => {
//       formData.append(key, newEmployee[key]);
//     });

//     try {
//       if (editingEmployee) {
//         await axios.put(`${API_URL}/employees/${editingEmployee._id}`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//       } else {
//         await axios.post(`${API_URL}/employees`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//       }
//       // Refresh the employee list
//       const response = await axios.get(`${API_URL}/employees`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       setEmployees(response.data);
//       setNewEmployee({
//         name: '',
//         email: '',
//         mobile: '',
//         designation: '',
//         gender: '',
//         course: '',
//         image: null,
//       });
//       setEditingEmployee(null); // Clear the editing state
//     } catch (error) {
//       console.error('Error saving employee:', error);
//     }
//   };

//   const handleUpdateEmployee = (employee) => {
//     setNewEmployee(employee);
//     setEditingEmployee(employee);
//   };

//   const handleDeleteEmployee = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/employees/${id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       // Refresh the employee list
//       const response = await axios.get(`${API_URL}/employees`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Employee Management</h2>
//       <form onSubmit={(e) => { e.preventDefault(); handleCreateEmployee(); }}>
//         <input
//           type="text"
//           value={newEmployee.name}
//           onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="email"
//           value={newEmployee.email}
//           onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="text"
//           value={newEmployee.mobile}
//           onChange={(e) => setNewEmployee({ ...newEmployee, mobile: e.target.value })}
//           placeholder="Mobile No"
//           required
//         />
//         <input
//           type="text"
//           value={newEmployee.designation}
//           onChange={(e) => setNewEmployee({ ...newEmployee, designation: e.target.value })}
//           placeholder="Designation"
//           required
//         />
//         <select
//           value={newEmployee.gender}
//           onChange={(e) => setNewEmployee({ ...newEmployee, gender: e.target.value })}
//           required
//         >
//           <option value="">Select Gender</option>
//           <option value="M">Male</option>
//           <option value="F">Female</option>
//         </select>
//         <input
//           type="text"
//           value={newEmployee.course}
//           onChange={(e) => setNewEmployee({ ...newEmployee, course: e.target.value })}
//           placeholder="Course"
//           required
//         />
//         <input
//           type="file"
//           onChange={(e) => setNewEmployee({ ...newEmployee, image: e.target.files[0] })}
//         />
//         <button type="submit">{editingEmployee ? 'Update Employee' : 'Create Employee'}</button>
//       </form>

//       <h3>Employee List</h3>
//       <ul>
//         {employees.map(emp => (
//           <li key={emp._id}>
//             {emp.name} - {emp.email}
//             <button onClick={() => handleUpdateEmployee(emp)}>Update</button>
//             <button onClick={() => handleDeleteEmployee(emp._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <div>
//       {!isLoggedIn ? <Login onLogin={handleLogin} /> : <EmployeeManagement />}
//     </div>
//   );
// };

// export default App;
