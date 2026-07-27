import { useNavigate } from "react-router-dom";

function FacultyMaterials() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-card">
        <h1>Study Materials</h1>

        <div className="page-list">

          <div className="page-item">
            MIS101 Unit 1 Notes.pdf
          </div>

          <div className="page-item">
            MIS201 Assignment.pdf
          </div>

          <div className="page-item">
            MIS301 Lab Manual.pdf
          </div>

        </div>

        <br />

        <button className="login-btn" onClick={() => navigate("/faculty/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default FacultyMaterials;