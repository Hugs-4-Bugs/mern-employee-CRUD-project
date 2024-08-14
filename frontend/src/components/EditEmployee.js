// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditEmployee = ({ match }) => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: [],
//     image: null,
//   });

//   useEffect(() => {
//     // Fetch employee details by ID
//     const fetchEmployee = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/employees/${match.params.id}`, {
//           headers: {
//             'x-auth-token': localStorage.getItem('token'),
//           },
//         });
//         setForm(response.data);
//       } catch (error) {
//         console.error('Error fetching employee:', error);
//       }
//     };

//     fetchEmployee();
//   }, [match.params.id]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setForm((prevForm) => ({
//         ...prevForm,
//         course: checked
//           ? [...prevForm.course, value]
//           : prevForm.course.filter((c) => c !== value),
//       }));
//     } else {
//       setForm({
//         ...form,
//         [name]: value,
//       });
//     }
//   };

//   const handleFileChange = (e) => {
//     setForm({
//       ...form,
//       image: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(form).forEach((key) => {
//       if (Array.isArray(form[key])) {
//         form[key].forEach((item) => formData.append(key, item));
//       } else {
//         formData.append(key, form[key]);
//       }
//     });

//     try {
//       await axios.put(`http://localhost:5000/employees/${match.params.id}`, formData, {
//         headers: {
//           'x-auth-token': localStorage.getItem('token'),
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Employee updated successfully');
//       window.location.href = '/dashboard'; // Redirect or update UI as needed
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/employees/${match.params.id}`, {
//         headers: {
//           'x-auth-token': localStorage.getItem('token'),
//         },
//       });
//       console.log('Employee deleted successfully');
//       window.location.href = '/dashboard'; // Redirect to dashboard or update UI as needed
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Edit Employee</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           placeholder="Name"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="mobile"
//           value={form.mobile}
//           placeholder="Mobile No"
//           onChange={handleChange}
//           required
//         />
//         <select name="designation" value={form.designation} onChange={handleChange} required>
//           <option value="">Select Designation</option>
//           <option value="HR">HR</option>
//           <option value="Manager">Manager</option>
//           <option value="Sales">Sales</option>
//         </select>
//         <input
//           type="radio"
//           name="gender"
//           value="M"
//           checked={form.gender === 'M'}
//           onChange={handleChange}
//           required
//         /> Male
//         <input
//           type="radio"
//           name="gender"
//           value="F"
//           checked={form.gender === 'F'}
//           onChange={handleChange}
//           required
//         /> Female
//         <input
//           type="checkbox"
//           name="course"
//           value="MCA"
//           checked={form.course.includes('MCA')}
//           onChange={handleChange}
//         /> MCA
//         <input
//           type="checkbox"
//           name="course"
//           value="BCA"
//           checked={form.course.includes('BCA')}
//           onChange={handleChange}
//         /> BCA
//         <input
//           type="checkbox"
//           name="course"
//           value="BSC"
//           checked={form.course.includes('BSC')}
//           onChange={handleChange}
//         /> BSC
//         <input
//           type="file"
//           name="image"
//           onChange={handleFileChange}
//           accept="image/jpeg,image/png"
//         />
//         <button type="submit">Update</button>
//       </form>
//       <button onClick={handleDelete} style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}>
//         Delete Employee
//       </button>
//     </div>
//   );
// };

// export default EditEmployee;
















import React, { useState, useEffect } from 'react';
import api from '../api'; // Import the Axios instance
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const [employee, setEmployee] = useState({});
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // For navigation
  const { id } = useParams(); // Get the employee ID from URL

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await api.get(`/employees/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('mobile', employee.mobile);
    formData.append('designation', employee.designation);
    formData.append('gender', employee.gender);
    formData.append('course', employee.course);
    if (image) formData.append('image', image);

    try {
      await api.put(`/employees/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      navigate('/dashboard'); // Redirect to dashboard after updating the employee
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={employee.name || ''}
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={employee.email || ''}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={employee.mobile || ''}
          onChange={(e) => setEmployee({ ...employee, mobile: e.target.value })}
          placeholder="Mobile"
          required
        />
        <input
          type="text"
          value={employee.designation || ''}
          onChange={(e) => setEmployee({ ...employee, designation: e.target.value })}
          placeholder="Designation"
          required
        />
        <select
          value={employee.gender || 'Male'}
          onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          value={employee.course || ''}
          onChange={(e) => setEmployee({ ...employee, course: e.target.value })}
          placeholder="Course"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
