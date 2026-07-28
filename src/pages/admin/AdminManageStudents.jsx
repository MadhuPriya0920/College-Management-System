import { useNavigate } from "react-router-dom";

function AdminManageStudents() {
  const navigate = useNavigate();

  const students = [
    {
      regNo: "24MIS0143",
      name: "MOUNIKA P",
      department: "M.Tech Integrated Software Engineering",
      year: "2nd Year",
      status: "Active",
    },
    {
      regNo: "24MIS0151",
      name: "MADHU PRIYA K B",
      department: "M.Tech Integrated Software Engineering",
      year: "2nd Year",
      status: "Active",
    },
    {
      regNo: "24MIS0168",
      name: "VENGASREE G",
      department: "M.Tech Integrated Software Engineering",
      year: "2nd Year",
      status: "Active",
    },
    {
      regNo: "24MIS0084",
      name: "JEEVANA",
      department: "M.Tech Integrated Software Engineering",
      year: "2nd Year",
      status: "Active",
    },
    {
      regNo: "24MIS0411",
      name: "GAGANA PRIYA",
      department: "M.Tech Integrated Software Engineering",
      year: "2nd Year",
      status: "Active",
    },
    {
      regNo: "24MIS0418",
      name: "REKHA SAMHITHA",
      department: "M.Tech Integrated Software Engineering",
      year: "2nd Year",
      status: "Active",
    },
    {
      regNo: "24MIS0426",
      name: "TRAYA",
      department: "M.Tech Integrated Software Engineering",
      year: "2nd Year",
      status: "Active",
    },
  ];

  return (
    <div className="page">
      <div className="page-card">
        <h1>Manage Students</h1>

        <table>
          <thead>
            <tr>
              <th>Register Number</th>
              <th>Student Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.regNo}>
                <td>{student.regNo}</td>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
                <td>{student.status}</td>
              </tr>
            ))}
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

export default AdminManageStudents;