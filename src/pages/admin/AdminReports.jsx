import { useNavigate } from "react-router-dom";

function AdminReports() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-card">
        <h1>College Reports</h1>

        <div className="page-list">
          <div className="page-item">
            Total Students : 1110
          </div>

          <div className="page-item">
            Total Faculty : 86
          </div>

          <div className="page-item">
            Departments : 3
          </div>

          <div className="page-item">
            Average Attendance : 91%
          </div>
        </div>

        <br />

        <button
          className="login-btn"
          onClick={() => navigate("/admin/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default AdminReports;