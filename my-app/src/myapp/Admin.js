import React, { useState } from "react";
import Students from "./Students";
import Staff from "./Staff";
import AdminResults from "./AdminResults";  // ✅ Import this
import { useNavigate } from "react-router-dom";
import "./StudentStaff.css";

function Admin() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="admin-card">
      {!selectedOption ? (
        <nav className="admin-options">
          <button onClick={() => setSelectedOption("students")}>Manage Students</button>
          <button onClick={() => setSelectedOption("staff")}>Manage Staff</button>
          <button onClick={() => setSelectedOption("results")}>Manage Results</button>
          <button onClick={() => navigate("/admin/attendance")}>Manage Attendance</button>
        </nav>
      ) : (
        <div>
          {selectedOption === "students" && <Students />}
          {selectedOption === "staff" && <Staff />}
          {selectedOption === "results" && <AdminResults />}  {/* ✅ Now this will display */}
          <button className="back-click" onClick={() => setSelectedOption(null)}>Back</button>
        </div>
      )}
    </div>
  );
}

export default Admin;
