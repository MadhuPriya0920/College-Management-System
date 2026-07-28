import { useNavigate } from "react-router-dom";

function AdminManageFaculty() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-card">
        <h1>Manage Faculty</h1>

        <table>
          <thead>
            <tr>
              <th>Faculty ID</th>
              <th>Name</th>
              <th>Department</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>FAC101</td>
              <td>Dr. S. Kumar</td>
              <td>Software Engineering</td>
            </tr>

            <tr>
              <td>FAC102</td>
              <td>Dr. R. Priya</td>
              <td>Computer Science</td>
            </tr>

            <tr>
              <td>FAC103</td>
              <td>Dr. P. Arun</td>
              <td>Information Technology</td>
            </tr>
          </tbody>
        </table>

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

export default AdminManageFaculty;