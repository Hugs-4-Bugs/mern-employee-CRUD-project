// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const EmployeeList = ({ onEdit }) => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('/employees', {
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//           }
//         });
//         setEmployees(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/employees/${id}`, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       setEmployees(employees.filter(employee => employee._id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h2>Employee List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Designation</th>
//             <th>Gender</th>
//             <th>Course</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(employee => (
//             <tr key={employee._id}>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.mobile}</td>
//               <td>{employee.designation}</td>
//               <td>{employee.gender}</td>
//               <td>{employee.course}</td>
//               <td>
//                 {employee.image && (
//                   <img
//                     src={`http://localhost:5005/${employee.image}`}
//                     alt={employee.name}
//                     style={{ width: '100px', height: 'auto' }}
//                   />
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => onEdit(employee)}>Edit</button>
//                 <button onClick={() => handleDelete(employee._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;
















// src/components/EmployeeList.js
import React from 'react';
import axios from 'axios';

const EmployeeList = ({ employees, onUpdate }) => {
  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5005/employees/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      window.location.reload(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.course}</td>
              <td>
                {employee.image && <img src={`http://localhost:5005/${employee.image}`} alt="Employee" style={{ width: '50px' }} />}
              </td>
              <td>
                <button onClick={() => onUpdate(employee)}>Edit</button>
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
