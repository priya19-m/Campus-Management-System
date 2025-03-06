import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./StudentStaff.css"; // Ensure correct styling is applied

export default function StaffDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const staff = location.state?.staff;

  if (!staff) {
    return <p>No staff details available.</p>;
  }

  return (
    <div className="staff-details-card">
      <h2>Staff Details</h2>
      <p><strong>Name:</strong> {staff.name}</p>
      <p><strong>Department:</strong> {staff.department}</p>
      <p><strong>Subject:</strong> {staff.subject}</p>
      <p><strong>Address:</strong> {staff.address}</p>
      <p><strong>Experience:</strong> {staff.experience}</p>
      <p><strong>Designation:</strong> {staff.designation}</p>
      <p><strong>Email ID:</strong> {staff.emailid}</p>

      <button className="back-click" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
