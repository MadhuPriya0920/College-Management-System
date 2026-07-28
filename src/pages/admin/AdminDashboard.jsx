import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();

  const adminName = localStorage.getItem("adminName") || "Administrator";

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminName");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>

        <button onClick={() => navigate("/admin/dashboard")}>
          <FaChartBar />
          Dashboard
        </button>

        <button onClick={() => navigate("/admin/students")}>
          <FaUserGraduate />
          Manage Students
        </button>

        <button onClick={() => navigate("/admin/faculty")}>
          <FaChalkboardTeacher />
          Manage Faculty
        </button>

        <button onClick={() => navigate("/admin/departments")}>
          <FaBuilding />
          Departments
        </button>

        <button onClick={() => navigate("/admin/reports")}>
          <FaChartBar />
          Reports
        </button>

        <button className="logout" onClick={logout}>
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      <div className="content">
        <h1>Welcome, {adminName}</h1>

        <p>Manage the college efficiently from one place.</p>

        <div className="cards">
          <div
            className="card"
            onClick={() => navigate("/admin/students")}
          >
            <FaUserGraduate />
            <h3>Students</h3>
            <span>View and manage student records</span>
          </div>

          <div
            className="card"
            onClick={() => navigate("/admin/faculty")}
          >
            <FaChalkboardTeacher />
            <h3>Faculty</h3>
            <span>Manage faculty information</span>
          </div>

          <div
            className="card"
            onClick={() => navigate("/admin/departments")}
          >
            <FaBuilding />
            <h3>Departments</h3>
            <span>Department management</span>
          </div>

          <div
            className="card"
            onClick={() => navigate("/admin/reports")}
          >
            <FaChartBar />
            <h3>Reports</h3>
            <span>View college statistics</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;