import React, { useState, useEffect } from "react";
import "./Notices.css";

export default function Notices({ role }) {
  const [notices, setNotices] = useState(() => {
    const savedNotices = localStorage.getItem("notices");
    return savedNotices
      ? JSON.parse(savedNotices)
      : [
          { id: 1, text: "Exam schedules have been updated." },
          { id: 2, text: "College fest registrations are open!" },
        ];
  });

  const [newNotice, setNewNotice] = useState("");

  useEffect(() => {
    localStorage.setItem("notices", JSON.stringify(notices));
  }, [notices]);

  const handleAddNotice = () => {
    if (newNotice.trim() === "") return;
    setNotices([...notices, { id: Date.now(), text: newNotice }]);
    setNewNotice("");
  };

  const handleDeleteNotice = (id) => {
    setNotices(notices.filter((notice) => notice.id !== id));
  };

  return (
    <div className="notices-container">
      <h2>Notices & Announcements</h2>
      {notices.length === 0 ? (
        <p className="no-notices">No notices available.</p>
      ) : (
        <ul>
          {notices.map((notice) => (
            <li key={notice.id}>
              {notice.text}
              {role === "staff" && (
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteNotice(notice.id)}
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {role === "staff" && (
        <div className="notice-input">
          <input
            type="text"
            placeholder="Add new notice..."
            value={newNotice}
            onChange={(e) => setNewNotice(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddNotice}>
            Add Notice
          </button>
        </div>
      )}
    </div>
  );
}
