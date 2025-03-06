import React, { useState} from "react";
import "./StudentStaff.css";
import StudentDetails from "./StudentDetails";

const departmentImages = {
  CS: "https://images.pexels.com/photos/12899196/pexels-photo-12899196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  IT: "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ECE: "https://images.pexels.com/photos/1432680/pexels-photo-1432680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export default function Students() {
  const [students, setStudents] = useState([
    {
      name: "Priyadharshini",
      department: "CS",
      percentage: 85,
      address: "Dharmapuri",
      yearofstudy: "2nd year",
      dob: "19.05.2005",
      emailid: "priya@gmail.com",
    },
    {
      name: "Mathimalar",
      department: "CS",
      percentage: 90,
      address: "Hosur",
      yearofstudy: "3rd year",
      dob: "17.05.2005",
      emailid: "mathi@gmail.com",
    },
    {
      name: "Lavanya",
      department: "CS",
      percentage: 88,
      address: "Kallakurichi",
      yearofstudy: "1st year",
      dob: "05.09.2005",
      emailid: "lavanyab@gmail.com",
    },
    {
      name: "Resha",
      department: "CS",
      percentage: 92,
      address: "Trichy",
      yearofstudy: "2nd year",
      dob: "15.11.2005",
      emailid: "resha@gmail.com",
    },
    {
      name: "Harini",
      department: "CS",
      percentage: 81,
      address: "Salem",
      yearofstudy: "1st year",
      dob: "23.03.2006",
      emailid: "harini@gmail.com",
    },
    {
      name: "Divya",
      department: "IT",
      percentage: 80,
      address: "Namakkal",
      yearofstudy: "2nd year",
      dob: "19.02.2005",
      emailid: "divya@gmail.com",
    },
    {
      name: "Srinathi",
      department: "IT",
      percentage: 90,
      address: "Dharmapuri",
      yearofstudy: "3rd year",
      dob: "23.11.2004",
      emailid: "srinathi@gmail.com",
    },
    {
      name: "Rohit",
      department: "IT",
      percentage: 88,
      address: "Krishnagiri",
      yearofstudy: "1st year",
      dob: "25.07.2006",
      emailid: "rohit@gmail.com",
    },
    {
      name: "Chandru",
      department: "IT",
      percentage: 95,
      address: "Tirupur",
      yearofstudy: "3rd year",
      dob: "05.09.2004",
      emailid: "chandru@gmail.com",
    },
    {
      name: "Sharu",
      department: "IT",
      percentage: 81,
      address: "Salem",
      yearofstudy: "2nd year",
      dob: "05.10.2005",
      emailid: "sharu@gmail.com",
    },

    {
      name: "Somesh",
      department: "ECE",
      percentage: 87,
      address: "Coimbatore",
      yearofstudy: "3rd year",
      dob: "16.10.2004",
      emailid: "somesh@gmail.com",
    },
    {
      name: "Rishi",
      department: "ECE",
      percentage: 89,
      address: "Karur",
      yearofstudy: "3rd year",
      dob: "23.05.2004",
      emailid: "rishi@gmail.com",
    },
    {
      name: "Elamathi",
      department: "ECE",
      percentage: 90,
      address: "Chennai",
      yearofstudy: "1st year",
      dob: "17.11.2006",
      emailid: "elamathi@gmail.com",
    },
    {
      name: "Vijay",
      department: "ECE",
      percentage: 97,
      address: "Erode",
      yearofstudy: "4th year",
      dob: "22.06.2003",
      emailid: "vijay@gmail.com",
    },
    {
      name: "Tamil",
      department: "ECE",
      percentage: 87,
      address: "Krishnagiri",
      yearofstudy: "3rd year",
      dob: "22.09.2004",
      emailid: "tamil@gmail.com",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [expandedDepartment, setExpandedDepartment] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: "", department: "" });

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleBack = () => {
    setSelectedStudent(null);
  };

  const toggleDepartment = (department) => {
    setExpandedDepartment(expandedDepartment === department ? null : department);
  };

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.department) {
      alert("Please fill in all fields.");
      return;
    }
    setStudents([...students, newStudent]);
    setNewStudent({ name: "", department: "" });
    setShowForm(false);
  };

  const departments = students.reduce((acc, student) => {
    if (!acc[student.department]) acc[student.department] = [];
    acc[student.department].push(student);
    return acc;
  }, {});

  return (
    <div className="card">
      <div className="students-container">
        {selectedStudent ? (
          <StudentDetails student={selectedStudent} onBack={handleBack} />
        ) : (
          <>
           <button onClick={() => setShowForm(!showForm)}>
              {showForm ? "Hide Form" : "Add Student"}
            </button>

            {showForm && (
              <div className="student-form">
                <input type="text" placeholder="Name" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
                <select value={newStudent.department} onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value })}>
                  <option value="">Select Department</option>
                  <option value="CS">CS</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                </select>
                <input type="text" placeholder="Address" value={newStudent.address} onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })} />
                <input type="text" placeholder="DOB (DD.MM.YYYY)" value={newStudent.dob} onChange={(e) => setNewStudent({ ...newStudent, dob: e.target.value })} />
                <input type="email" placeholder="Email ID" value={newStudent.email} onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })} />
                <input type="number" placeholder="Percentage" value={newStudent.percentage} onChange={(e) => setNewStudent({ ...newStudent, percentage: e.target.value })} />
                <button onClick={handleAddStudent}>Submit</button>
              </div>
            )}

            {Object.keys(departments).map((department) => (
              <div key={department} className="student-department">
                <h3 onClick={() => toggleDepartment(department)}>{department} Department</h3>
                <img
                  src={departmentImages[department]}
                  alt={`${department} department`}
                  className="students-department-image"
                  onClick={() => toggleDepartment(department)}
                />
                {expandedDepartment === department && (
                  <table className="students-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departments[department].map((student, index) => (
                        <tr key={index}>
                          <td>
                            <span
                              className="students-name"
                              onClick={() => handleStudentClick(student)}
                            >
                              {student.name}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
