import React from "react";
import "./StudentStaff.css";

export default function StudentDetails({ student, onBack }) {
  return (
    <div className="student-details-card">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>Year of Study:</strong> {student.yearofstudy}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>DOB:</strong> {student.dob}</p>
      <p><strong>Email:</strong> {student.emailid}</p>
      <button className="back-click" onClick={onBack}>Back</button>
    </div>
  );
}
