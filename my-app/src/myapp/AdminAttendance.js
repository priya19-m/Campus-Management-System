import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Attendance.css";

export default function AdminAttendance() {
  const { role } = useParams();
  const navigate = useNavigate();

  const students = [
    { id: 1, name: "Priya", department: "CS", role: "student" },
    { id: 2, name: "Mathi", department: "CS", role: "student" },
    { id: 3, name: "Dhivya", department: "IT", role: "student" },
  ];

  const staff = [
    { id: 1, name: "John", department: "CS", role: "staff" },
    { id: 2, name: "Anita", department: "IT", role: "staff" },
  ];

  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    const storedAttendance = JSON.parse(localStorage.getItem("attendance")) || {};
    setAttendance(storedAttendance);
  }, []);

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [attendance]);

  const markAttendance = (userId, roleType, status) => {
    setAttendance((prev) => ({
      ...prev,
      [selectedDate]: {
        ...(prev[selectedDate] || {}),
        [`${roleType}-${userId}`]: status,
      },
    }));
  };

  const people = role === "students" ? students : staff;

  return (
    <div className="attendance-container">
      <h2>Mark {role === "students" ? "Student" : "Staff"} Attendance</h2>
      <button className="btn back-btn" onClick={() => navigate(-1)}>Back</button>

      <div className="date-selector">
        <label>Select Date:</label>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => {
            const key = `${person.role}-${person.id}`;
            return (
              <tr key={key}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.department}</td>
                <td>
                  <button
                    className={`btn ${attendance[selectedDate]?.[key] === "Present" ? "present" : ""}`}
                    onClick={() => markAttendance(person.id, person.role, "Present")}
                  >
                    Present
                  </button>
                  <button
                    className={`btn ${attendance[selectedDate]?.[key] === "Absent" ? "absent" : ""}`}
                    onClick={() => markAttendance(person.id, person.role, "Absent")}
                  >
                    Absent
                  </button>
                  <span>{attendance[selectedDate]?.[key] || "Not Marked"}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
