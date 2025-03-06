import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Attendance.css";

export default function ViewAttendance({ role, loggedInUserId }) {
  const navigate = useNavigate();
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    const storedAttendance = JSON.parse(localStorage.getItem("attendance")) || {};
    setAttendance(storedAttendance);
  }, [selectedDate]);

  const key = `${role}-${loggedInUserId}`;
  const userAttendance = attendance[selectedDate]?.[key] || "Not Marked";

  return (
    <div className="attendance-container">
      <h2>My Attendance</h2>
      <button className="btn back-btn" onClick={() => navigate(-1)}>Back</button>

      <div className="date-selector">
        <label>Select Date:</label>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </div>

      <div className="attendance-status">
        <h3>Attendance on {selectedDate}:</h3>
        <p>Status: <strong>{userAttendance}</strong></p>
      </div>
    </div>
  );
}
