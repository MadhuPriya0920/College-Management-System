import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";

import StudentLogin from "./pages/student/StudentLogin";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentAttendance from "./pages/student/StudentAttendance";
import StudentCourses from "./pages/student/StudentCourses";
import StudentResults from "./pages/student/StudentResults";
import StudentTimetable from "./pages/student/StudentTimetable";
import StudentProfile from "./pages/student/StudentProfile";

import FacultyLogin from "./pages/faculty/FacultyLogin";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/attendance" element={<StudentAttendance />} />
      <Route path="/student/courses" element={<StudentCourses />} />
      <Route path="/student/results" element={<StudentResults />} />
      <Route path="/student/timetable" element={<StudentTimetable />} />
      <Route path="/student/profile" element={<StudentProfile />} />

      <Route path="/faculty/login" element={<FacultyLogin />} />
      <Route path="/faculty/dashboard" element={<FacultyDashboard />} />

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

    </Routes>
  );
}

export default App;