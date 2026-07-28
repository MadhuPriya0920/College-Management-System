import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim().toLowerCase() !== "admin") {
      alert("Invalid username. Use: admin");
      return;
    }

    localStorage.setItem("adminLoggedIn", "true");
    localStorage.setItem("adminName", "Administrator");

    navigate("/admin/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Administrator Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>

          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;