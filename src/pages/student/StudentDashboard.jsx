import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaClipboardCheck,
  FaBookOpen,
  FaChartLine,
  FaCalendarAlt,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function StudentDashboard() {

  const navigate = useNavigate();

  const studentName = localStorage.getItem("studentName") || "Student";

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <aside className="sidebar">

          <div className="sidebar-title">
            Student Panel
          </div>

          <button onClick={() => navigate("/student/dashboard")}>
            <FaUserGraduate />
            Dashboard
          </button>

          <button onClick={() => navigate("/student/attendance")}>
            <FaClipboardCheck />
            Attendance
          </button>

          <button onClick={() => navigate("/student/courses")}>
            <FaBookOpen />
            Courses
          </button>

          <button onClick={() => navigate("/student/results")}>
            <FaChartLine />
            Results
          </button>

          <button onClick={() => navigate("/student/timetable")}>
            <FaCalendarAlt />
            Timetable
          </button>

          <button onClick={() => navigate("/student/profile")}>
            <FaUserCircle />
            Profile
          </button>

          <button
            className="logout"
            onClick={() => {

              localStorage.clear();
              navigate("/");

            }}
          >
            <FaSignOutAlt />
            Logout
          </button>

        </aside>

        <main className="content">

          <h1>Welcome, {studentName}</h1>

          <p>Have a great day!</p>

          <div className="cards">

            <div
              className="card"
              onClick={() => navigate("/student/attendance")}
            >
              <FaClipboardCheck />
              <h3>Attendance</h3>
              <span>92%</span>
            </div>

            <div
              className="card"
              onClick={() => navigate("/student/courses")}
            >
              <FaBookOpen />
              <h3>Courses</h3>
              <span>4 Subjects</span>
            </div>

            <div
              className="card"
              onClick={() => navigate("/student/results")}
            >
              <FaChartLine />
              <h3>Results</h3>
              <span>CGPA 8.90</span>
            </div>

            <div
              className="card"
              onClick={() => navigate("/student/timetable")}
            >
              <FaCalendarAlt />
              <h3>Timetable</h3>
              <span>Today's Schedule</span>
            </div>

          </div>

        </main>

      </div>

      <Footer />
    </>
  );
}

export default StudentDashboard;