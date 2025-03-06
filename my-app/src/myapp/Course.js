import React, { useState } from "react";
import "./Course.css";

export default function Course() {
  const [courses, setCourses] = useState([
    { courseName: "Data Structures and Algorithms", department: "CS" },
    { courseName: "Operating Systems", department: "CS" },
    { courseName: "Database Management Systems", department: "CS" },
    { courseName: "Artificial Intelligence", department: "CS" },
    { courseName: "Machine Learning", department: "CS" },
    { courseName: "Internet of Things", department: "IT" },
    { courseName: "Network Security", department: "IT" },
    { courseName: "Blockchain Technology", department: "IT" },
    { courseName: "Data Analytics", department: "IT" },
    { courseName: "Human-Computer Interaction", department: "IT" },
    { courseName: "Embedded Systems", department: "ECE" },
    { courseName: "VLSI Design", department: "ECE" },
    { courseName: "Wireless Communication", department: "ECE" },
    { courseName: "Biomedical Signal Processing", department: "ECE" },
    { courseName: "Digital Signal Processing", department: "ECE" },
    { courseName: "Deep Learning", department: "AIDS" },
    { courseName: "Big Data Analytics", department: "AIDS" },
    { courseName: "Natural Language Processing", department: "AIDS" },
    { courseName: "Cloud Computing", department: "AIDS" },
    { courseName: "Cybersecurity", department: "AIDS" },
    { courseName: "Structural Engineering", department: "Civil" },
    { courseName: "Transportation Engineering", department: "Civil" },
    { courseName: "Geotechnical Engineering", department: "Civil" },
    { courseName: "Construction Management", department: "Civil" },
    { courseName: "Environmental Engineering", department: "Civil" },
  ]);

  const [departments, setDepartments] = useState(["CS", "IT", "ECE", "AIDS", "Civil"]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [newDepartment, setNewDepartment] = useState("");
  const [newCourse, setNewCourse] = useState({ courseName: "", department: "" });

  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.department]) {
      acc[course.department] = [];
    }
    acc[course.department].push(course);
    return acc;
  }, {});

  const addDepartment = () => {
    if (newDepartment && !departments.includes(newDepartment)) {
      setDepartments([...departments, newDepartment]);
      setNewDepartment("");
    }
  };

  const addCourse = () => {
    if (newCourse.courseName && selectedDepartment) {
      setCourses([...courses, { ...newCourse, department: selectedDepartment }]);
      setNewCourse({ courseName: "", department: "" });
    }
  };

  const deleteCourse = (courseName, department) => {
    setCourses(courses.filter((course) => !(course.courseName === courseName && course.department === department)));
  };

  const deleteDepartment = (department) => {
    setDepartments(departments.filter((dep) => dep !== department));
    setCourses(courses.filter((course) => course.department !== department));
    setSelectedDepartment(null);
  };

  return (
    <div className="course-card">
      <div className="course-container">
        {!selectedDepartment ? (
          <div>
            <div className="dept"><h3>Departments</h3></div>
            <table className="department-table">
              <thead>
                <tr>
                  <th>Department Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department) => (
                  <tr key={department}>
                    <td>
                      <button className="department-button" onClick={() => setSelectedDepartment(department)}>
                        {department} Department
                      </button>
                    </td>
                    <td>
                      <button className="department-delete-button" onClick={() => deleteDepartment(department)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="add-department-form">
              <input
                type="text"
                placeholder="New Department Name"
                value={newDepartment}
                onChange={(e) => setNewDepartment(e.target.value)}
              />
              <button onClick={addDepartment}>Add Department</button>
            </div>
          </div>
        ) : (
          <div>
            <button className="back-button" onClick={() => setSelectedDepartment(null)}>
              Back to Departments
            </button>
            <h3>{selectedDepartment} Department</h3>
            <table className="course-table">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {groupedCourses[selectedDepartment]?.map((course, index) => (
                  <tr key={index}>
                    <td>{course.courseName}</td>
                    <td>
                      <button className="course-delete-button" onClick={() => deleteCourse(course.courseName, selectedDepartment)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="add-course-form">
              <input
                type="text"
                placeholder="New Course Name"
                value={newCourse.courseName}
                onChange={(e) => setNewCourse({ ...newCourse, courseName: e.target.value })}
              />
              <button onClick={addCourse}>Add Course</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
