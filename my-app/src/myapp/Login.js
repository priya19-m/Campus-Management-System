import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "student", 
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, role } = credentials;

    if (username.length >= 6 && password.length >= 8) {
      setError("");
      onLogin(username, password, role); 
    } else {
      setError("Enter a valid username (min 6 chars) and password (min 8 chars).");
    }
  };

  return (
    <div className="login-container" style={{ minHeight: "100vh", width: "100vw" }}>
      <div className="login-card">
        <h2>Campus Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Login As:</label>
            <select name="role" value={credentials.role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>  {/* Added Admin option */}
            </select>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
