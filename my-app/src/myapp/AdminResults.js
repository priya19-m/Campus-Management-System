import React, { useState } from "react";
import "./AdminResults.css";

export default function AdminResults() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleAddResult = () => {
    if (!studentName || !course || !grade || !percentage) {
      alert("Please fill all fields.");
      return;
    }

    const formattedName = studentName.trim().toLowerCase();
    const storedResults = JSON.parse(localStorage.getItem("studentResults")) || {};
    
    // Add new result for the student
    if (!storedResults[formattedName]) {
      storedResults[formattedName] = [];
    }
    storedResults[formattedName].push({ course, grade, percentage });

    // Save results in local storage
    localStorage.setItem("studentResults", JSON.stringify(storedResults));

    alert("Result added successfully!");

    // Reset form fields
    setStudentName("");
    setCourse("");
    setGrade("");
    setPercentage("");
  };

  return (
    <div className="admin-results-container">
      <h2>Add Student Results</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="admin-results-input"
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="admin-results-input"
      />
      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className="admin-results-input"
      />
      <input
        type="number"
        placeholder="Percentage"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
        className="admin-results-input"
      />
      <button onClick={handleAddResult} className="admin-results-button">
        Add Result
      </button>
    </div>
  );
}
