import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaClipboardCheck,
  FaBookOpen,
  FaFolderOpen,
  FaSignOutAlt,
} from "react-icons/fa";

function FacultyDashboard() {
  const navigate = useNavigate();

  const facultyName =
    localStorage.getItem("facultyName") || "Faculty Member";

  const facultyId =
    localStorage.getItem("facultyId") || "FAC101";

  const logout = () => {
    localStorage.removeItem("facultyName");
    localStorage.removeItem("facultyId");
    navigate("/faculty/login");
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="sidebar-title">Faculty Portal</h2>

        <button onClick={() => navigate("/faculty/dashboard")}>
          <FaHome />
          Dashboard
        </button>

        <button onClick={() => navigate("/faculty/students")}>
          <FaUserGraduate />
          My Students
        </button>

        <button onClick={() => navigate("/faculty/attendance")}>
          <FaClipboardCheck />
          Attendance
        </button>

        <button onClick={() => navigate("/faculty/assignments")}>
          <FaBookOpen />
          Assignments
        </button>

        <button onClick={() => navigate("/faculty/materials")}>
          <FaFolderOpen />
          Study Materials
        </button>

        <button className="logout" onClick={logout}>
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      <div className="content">
        <h1>Welcome, {facultyName}</h1>

        <p>Faculty ID: {facultyId}</p>

        <div className="cards">
          <div
            className="card"
            onClick={() => navigate("/faculty/students")}
          >
            <FaUserGraduate />
            <h3>My Students</h3>
            <span>View assigned students</span>
          </div>

          <div
            className="card"
            onClick={() => navigate("/faculty/attendance")}
          >
            <FaClipboardCheck />
            <h3>Attendance</h3>
            <span>Manage attendance records</span>
          </div>

          <div
            className="card"
            onClick={() => navigate("/faculty/assignments")}
          >
            <FaBookOpen />
            <h3>Assignments</h3>
            <span>Create and manage assignments</span>
          </div>

          <div
            className="card"
            onClick={() => navigate("/faculty/materials")}
          >
            <FaFolderOpen />
            <h3>Study Materials</h3>
            <span>Upload and manage notes</span>
          </div>

          <div className="card">
            <FaBookOpen />
            <h3>Today's Classes</h3>
            <span>3 Scheduled Classes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;