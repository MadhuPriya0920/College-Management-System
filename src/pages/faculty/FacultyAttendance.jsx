import { useNavigate } from "react-router-dom";

function FacultyAttendance() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-card">
        <h1>Attendance</h1>

        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Attendance Taken</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>MIS101</td>
              <td>92%</td>
            </tr>

            <tr>
              <td>MIS201</td>
              <td>88%</td>
            </tr>

            <tr>
              <td>MIS301</td>
              <td>95%</td>
            </tr>
          </tbody>
        </table>

        <br />

        <button className="login-btn" onClick={() => navigate("/faculty/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default FacultyAttendance;