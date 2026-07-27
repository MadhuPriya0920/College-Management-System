import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FacultyLogin() {
  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const facultyData = {
    FAC101: "Dr. Rajesh Kumar",
    FAC102: "Dr. Priya Sharma",
    FAC103: "Dr. Anil Reddy",
    FAC104: "Dr. Meena Iyer",
    FAC105: "Dr. Kavitha Rao",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const facultyName =
      facultyData[employeeId.toUpperCase()] || "Faculty Member";

    localStorage.setItem("facultyId", employeeId.toUpperCase());
    localStorage.setItem("facultyName", facultyName);

    navigate("/faculty/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Faculty Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default FacultyLogin;