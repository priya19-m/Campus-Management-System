import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import "./styles.css";
import Students from "./myapp/Students";
import Staff from "./myapp/Staff";
import StudentDetails from "./myapp/StudentDetails";
import StaffDetails from "./myapp/StaffDetails";
import Login from "./myapp/Login";
import Course from "./myapp/Course";
import CourseDetails from "./myapp/Course";
import Data from "./myapp/Data";
import AdminAttendance from "./myapp/AdminAttendance";
import ViewAttendance from "./myapp/ViewAttendance";
import Notices from "./myapp/Notices";
import StudentResults from "./myapp/StudentResults";
import Admin from "./myapp/Admin";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState("");

  const validCredentials = {
    student: { username: "Student123", password: "Student@123" },
    staff: { username: "Staff123", password: "Staff@123" },
    admin: { username: "Admin123", password: "Admin@123" }
  };

  const handleLogin = (username, password, role) => {
    if (
      validCredentials[role] &&
      username === validCredentials[role].username &&
      password === validCredentials[role].password
    ) {
      setIsLoggedIn(true);
      setUserRole(role);
      setLoggedInUser(username);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <Layout handleLogout={handleLogout} userRole={userRole} loggedInUser={loggedInUser} />
    </Router>
  );
}

function Layout({ handleLogout, userRole, loggedInUser }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && (
        <div className="title">
          CAMPUS MANAGEMENT SYSTEM
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

      <nav className={isHomePage ? "nav-center" : "nav-top"}>
        <Link to="/">Home</Link>
        {userRole === "admin" && <Link to="/admin">Admin Panel</Link>}
        {userRole === "staff" && (
          <>
            <Link to="/courses">Courses</Link>
            <Link to="/attendance">View Attendance</Link>
            <Link to="/notices">Notices</Link>
          </>
        )}
        {userRole === "student" && (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/attendance">View Attendance</Link>
            <Link to="/results">View Results</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/staff" element={<Staff />} />
        <Route path="/students" element={<Students />} />
        <Route path="/profile" element={<Data />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route path="/staff-details" element={<StaffDetails />} />
        <Route path="/notices" element={<Notices role={userRole} />} />
        <Route path="/results" element={<StudentResults loggedInUser={loggedInUser} />} />
        
        {/* ✅ Admin Panel */}
        <Route path="/admin/*" element={<Admin />} />

        {/* ✅ Admin Attendance Management */}
        {userRole === "admin" && <Route path="/admin/attendance" element={<AdminAttendance />} />}
        {userRole === "admin" && <Route path="/admin/attendance/:role" element={<ViewAttendance />} />}
        
        {/* ✅ Students & Staff can view their attendance */}
        {(userRole === "student" || userRole === "staff") && (
          <Route path="/attendance" element={<ViewAttendance role={userRole} loggedInUserId={loggedInUser} />} />
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
