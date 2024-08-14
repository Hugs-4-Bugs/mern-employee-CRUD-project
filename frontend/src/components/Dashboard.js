// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5005/employees', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEmployees(filtered);
    } else {
      setFilteredEmployees(employees);
    }
  }, [searchTerm, employees]);

  const handleUpdate = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleClear = () => {
    setSelectedEmployee(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Employee Dashboard</h2>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Employee Form */}
      <EmployeeForm
        selectedEmployee={selectedEmployee}
        onClear={handleClear}
        onEmployeeChange={setEmployees} // Assuming EmployeeForm updates employees
      />

      {/* Employee List */}
      <EmployeeList
        employees={filteredEmployees}
        onUpdate={handleUpdate}
        onEmployeeChange={setEmployees} // Assuming EmployeeList updates employees
      />
    </div>
  );
};

export default Dashboard;
