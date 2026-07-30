import { useNavigate } from "react-router-dom";
function FacultyStudents() {
  const navigate = useNavigate();
  const students = [
    { regNo: "24MIS0143", name: "MOUNIKA P" },
    { regNo: "24MIS0151", name: "MADHU PRIYA K B" },
    { regNo: "24MIS0168", name: "VENGASREE G" },
    { regNo: "24MIS0084", name: "JEEVANA" },
    { regNo: "24MIS0411", name: "GAGANA PRIYA" },
    { regNo: "24MIS0412", name: "Dharshini"},
  ];
  return (
    <div className="page">
      <div className="page-card">
        <h1>My Students</h1>
        <table>
          <thead>
            <tr>
              <th>Register Number</th>
              <th>Student Name</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.regNo}</td>
                <td>{student.name}</td>
              </tr>
            ))}
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
export default FacultyStudents;