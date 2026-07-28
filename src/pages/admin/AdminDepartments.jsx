import { useNavigate } from "react-router-dom";

function AdminDepartments() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-card">
        <h1>Departments</h1>

        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>HOD</th>
              <th>Students</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>M.Tech Integrated Software Engineering</td>
              <td>Dr. S. Kumar</td>
              <td>120</td>
            </tr>

            <tr>
              <td>Computer Science Engineering</td>
              <td>Dr. R. Priya</td>
              <td>560</td>
            </tr>

            <tr>
              <td>Information Technology</td>
              <td>Dr. P. Arun</td>
              <td>430</td>
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

export default AdminDepartments;