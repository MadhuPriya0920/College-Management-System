import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FacultyAssignments() {
  const navigate = useNavigate();

  const [assignments] = useState([
    {
      id: 1,
      course: "MIS101",
      title: "Database Basics",
      dueDate: "15 Aug 2026",
      status: "Active",
    },
    {
      id: 2,
      course: "MIS201",
      title: "Case Study Report",
      dueDate: "20 Aug 2026",
      status: "Pending",
    },
    {
      id: 3,
      course: "MIS301",
      title: "Mini Project",
      dueDate: "28 Aug 2026",
      status: "Upcoming",
    },
  ]);

  const totalAssignments = assignments.length;
  const activeAssignments = assignments.filter(
    (item) => item.status === "Active"
  ).length;

  return (
    <div className="page">
      <div className="page-card">
        <h1>Assignments</h1>

        <div className="cards">

          <div className="card">
            <h3>Total Assignments</h3>
            <span>{totalAssignments}</span>
          </div>

          <div className="card">
            <h3>Active Assignments</h3>
            <span>{activeAssignments}</span>
          </div>

        </div>

        <br />

        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Assignment</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>{assignment.course}</td>
                <td>{assignment.title}</td>
                <td>{assignment.dueDate}</td>
                <td>{assignment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <br />

        <button
          className="login-btn"
          onClick={() => navigate("/faculty/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default FacultyAssignments;