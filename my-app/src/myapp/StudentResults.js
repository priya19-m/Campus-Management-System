import React, { useState, useEffect } from "react";
import "./StudentResults.css";


export default function StudentResults({ loggedInUser }) {
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    // Fetch results from local storage based on the logged-in student's name
    const storedResults = JSON.parse(localStorage.getItem("studentResults")) || {};
    const formattedName = loggedInUser.trim().toLowerCase();
    setFilteredResults(storedResults[formattedName] || []);
  }, [loggedInUser]);

  return (
    <div className="card">
      <h2>My Results</h2>

      {filteredResults.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((result, index) => (
              <tr key={index}>
                <td>{result.course}</td>
                <td>{result.grade}</td>
                <td>{result.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
