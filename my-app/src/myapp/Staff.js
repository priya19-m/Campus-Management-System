import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentStaff.css";

const initialStaff = [
  {
    name: "Kala",
    department: "CS",
    subject: "Computer Networks",
    address: "Chennai",
    experience:"10 years",
    designation: "Assistant Proffessor",
    emailid:"kala@gmail.com",
  },
  {
    name: "Ramesh",
    department: "CS",
    subject: "C Programming",
    address: "Madurai",
    experience:"12 years",
    designation: "Assistant Proffessor",
    emailid:"ramesh@gmail.com",
  },
  {
    name: "Pooja",
    department: "CS",
    subject: "AI",
    address: "Coimbatore",
    experience:"11 years",
    designation: "Proffessor",
    emailid:"pooja@gmail.com",
  },
  {
    name: "Dinesh",
    department: "CS",
    subject: "Computer Fundamentals",
    address: "Salem",
    experience:"7 years",
    designation: "Proffessor",
    emailid:"dinesh@gmail.com",
  },
  {
    name: "Arun",
    department: "CS",
    subject: "Web Design",
    address: "Tirupur",
    experience:"10 years",
    designation: "Assosiative Proffessor",
    emailid:"arun@gmail.com",
  },
  {
    name: "Anita",
    department: "IT",
    subject: "Data Structures",
    address: "Trichy",
    experience:"15 years",
    designation: "Proffessor",
    emailid:"anita@gmail.com",
  },
  { 
    name: "Bala", 
    department: "IT", 
    subject: "Algorithms", 
    address: "Salem",
    experience:"13 years",
    designation: "Assistant Proffessor",
    emailid:"bala@gmail.com",
  },
  {
    name: "Kowsik",
    department: "IT",
    subject: "Desingn and Analysis of Algorithms",
    address: "Dharmapuri",
    experience:"12 years",
    designation: "Assistant Proffessor",
    emailid:"kowsik@gmail.com",
  },
  { 
    name: "Saranya", 
    department: "IT", 
    subject: "Advanced Algorithms", 
    address: "Salem",
    experience:"8 years", 
    designation: "Proffessor",
    emailid:"saranya@gmail.com",
  },
  { 
    name: "Prakash", 
    department: "IT",
    subject: "Java Programming", 
    address: "Erode",
    experience:"5 years", 
    designation: "Assosiative Proffessor",
    emailid:"prakash@gmail.com",
  },
  {
    name: "Maya",
    department: "ECE",
    subject: "Signals and Systems",
    address: "Erode",
    experience:"10 years",
    designation: "Assistant Proffessor",
    emailid:"maya@gmail.com",
  },
  {
    name: "Siva",
    department: "ECE",
    subject: "Analog Electronics",
    address: "Hosur",
    experience:"15 years",
    designation: "Proffessor",
    emailid:"siva@gmail.com",
  },
  {
    name: "Karpagam",
    department: "ECE",
    subject: "Digital Communication",
    address: "Vellore",
    experience:"12 years",
    designation: "Proffessor",
    emailid:"karpagam@gmail.com",
  },
  {
    name: "Manjula",
    department: "ECE",
    subject: "Microprocessors and Microcontrollers",
    address: "Nagercoil",
    experience:"9 years",
    designation: "Assistant Proffessor",
    emailid:"manjula@gmail.com",
  },
  {
    name: "Kavitha",
    department: "ECE",
    subject: "Control System",
    address: "Pollachi",
    experience:"13 years",
    designation: "Proffessor",
    emailid:"kavitha@gmail.com",
  },
];


const departmentImages = {
  CS: "https://images.pexels.com/photos/13916999/pexels-photo-13916999.jpeg",
  IT: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg",
  ECE: "https://images.pexels.com/photos/5023567/pexels-photo-5023567.jpeg",
};

export default function Staff() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [staff, setStaff] = useState(initialStaff);
  const [newStaff, setNewStaff] = useState({
    name: "", department: "", subject: "", address: "", experience: "", designation: "", emailid: ""
  });

  const handleDepartmentClick = (dept) => {
    setSelectedDepartment(dept);
  };

  const addStaff = () => {
    if (newStaff.name && newStaff.department) {
      setStaff([...staff, newStaff]);
      setNewStaff({ name: "", department: "", subject: "", address: "", experience: "", designation: "", emailid: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="card">
      <div className="staff-container">
        {/* Show department images */}
        <div className="department-images-container">
          {Object.entries(departmentImages).map(([dept, imgSrc]) => (
            <div key={dept} className="department-image-card" onClick={() => handleDepartmentClick(dept)}>
              <h3>{dept} Department</h3>
              <img src={imgSrc} alt={`${dept} department`} className="department-image" />
            </div>
          ))}
        </div>

        {/* Show Staff List */}
        {selectedDepartment && (
          <div className="staff-list">
            <h2>{selectedDepartment} Department Staff</h2>
            {staff.filter(s => s.department === selectedDepartment).map((s, index) => (
              <div key={index} className="staff-details">
                <p><strong>Name:</strong> {s.name}</p>
                <p><strong>Subject:</strong> {s.subject}</p>
                <p><strong>Address:</strong> {s.address}</p>
                <p><strong>Experience:</strong> {s.experience}</p>
                <p><strong>Designation:</strong> {s.designation}</p>
                <p><strong>Email:</strong> {s.emailid}</p>
              </div>
            ))}
          </div>
        )}

        {/* Add Staff Button */}
        <button onClick={() => setShowForm(!showForm)} className="add-staff-btn">{showForm ? "Cancel" : "Add Staff"}</button>

        {/* Staff Form */}
        {showForm && (
          <div className="staff-form">
            <h2>Add New Staff</h2>
            <input type="text" placeholder="Name" value={newStaff.name} onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })} />
            <select value={newStaff.department} onChange={(e) => setNewStaff({ ...newStaff, department: e.target.value })}>
              <option value="">Select Department</option>
              <option value="CS">CS</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
            </select>
            <input type="text" placeholder="Subject" value={newStaff.subject} onChange={(e) => setNewStaff({ ...newStaff, subject: e.target.value })} />
            <input type="text" placeholder="Address" value={newStaff.address} onChange={(e) => setNewStaff({ ...newStaff, address: e.target.value })} />
            <input type="text" placeholder="Experience" value={newStaff.experience} onChange={(e) => setNewStaff({ ...newStaff, experience: e.target.value })} />
            <input type="text" placeholder="Designation" value={newStaff.designation} onChange={(e) => setNewStaff({ ...newStaff, designation: e.target.value })} />
            <input type="email" placeholder="Email" value={newStaff.emailid} onChange={(e) => setNewStaff({ ...newStaff, emailid: e.target.value })} />
            <button onClick={addStaff}>Add Staff</button>
          </div>
        )}
      </div>
    </div>
  );
}
