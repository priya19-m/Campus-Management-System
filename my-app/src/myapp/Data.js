import React, { useState, useEffect } from "react";
import "./Data.css";

export default function Course() {
  
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem("students")) || []);
  const [newStudent, setNewStudent] = useState({ name: "", course: "", percentage: "" });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  
  const addStudent = () => {
    if (newStudent.name && newStudent.course && newStudent.percentage) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: "", course: "", percentage: "" });
    }
  };

  const deleteStudent = (studentName) => {
    setStudents(students.filter((student) => student.name !== studentName));
  };

  return (
    <div className="card">
      <div className="course-container">
        <h3>Students</h3>
        <table className="student-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Percentage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.percentage}%</td>
                <td>
                  <button className="delete-button" onClick={() => deleteStudent(student.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="add-student-form">
          <input
            type="text"
            placeholder="Student Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Course"
            value={newStudent.course}
            onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
          />
          <input
            type="number"
            placeholder="Percentage"
            value={newStudent.percentage}
            onChange={(e) => setNewStudent({ ...newStudent, percentage: e.target.value })}
          />
          <button onClick={addStudent}>Add Student</button>
        </div>
      </div>
    </div>
  );
}
