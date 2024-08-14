// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateEmployee = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: [],
//     image: null,
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
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
//       formData.append(key, form[key]);
//     });
//     await axios.post('http://localhost:5000/employees', formData, {
//       headers: {
//         'x-auth-token': localStorage.getItem('token'),
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     window.location.href = '/dashboard';
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//       <input type="text" name="mobile" placeholder="Mobile No" onChange={handleChange} required />
//       <select name="designation" onChange={handleChange} required>
//         <option value="">Select Designation</option>
//         <option value="HR">HR</option>
//         <option value="Manager">Manager</option>
//         <option value="Sales">Sales</option>
//       </select>
//       <input type="radio" name="gender" value="M" onChange={handleChange} required /> Male
//       <input type="radio" name="gender" value="F" onChange={handleChange} required /> Female
//       <input type="checkbox" name="course" value="MCA" onChange={handleChange} /> MCA
//       <input type="checkbox" name="course" value="BCA" onChange={handleChange} /> BCA
//       <input type="checkbox" name="course" value="BSC" onChange={handleChange} /> BSC
//       <input type="file" name="image" onChange={handleFileChange} accept="image/jpeg,image/png" required />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CreateEmployee;











import React, { useState } from 'react';
import api from '../api'; // Import the Axios instance
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('Male');
  const [course, setCourse] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('designation', designation);
    formData.append('gender', gender);
    formData.append('course', course);
    if (image) formData.append('image', image);

    try {
      await api.post('/employees', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      navigate('/dashboard'); // Redirect to dashboard after creating an employee
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile"
          required
        />
        <input
          type="text"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          placeholder="Designation"
          required
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Course"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
