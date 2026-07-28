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
import FacultyStudents from "./pages/faculty/FacultyStudents";
import FacultyAttendance from "./pages/faculty/FacultyAttendance";
import FacultyAssignments from "./pages/faculty/FacultyAssignments";
import FacultyMaterials from "./pages/faculty/FacultyMaterials";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminManageStudents from "./pages/admin/AdminManageStudents";
import AdminManageFaculty from "./pages/admin/AdminManageFaculty";
import AdminDepartments from "./pages/admin/AdminDepartments";
import AdminReports from "./pages/admin/AdminReports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Student */}
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/attendance" element={<StudentAttendance />} />
      <Route path="/student/courses" element={<StudentCourses />} />
      <Route path="/student/results" element={<StudentResults />} />
      <Route path="/student/timetable" element={<StudentTimetable />} />
      <Route path="/student/profile" element={<StudentProfile />} />

      {/* Faculty */}
      <Route path="/faculty/login" element={<FacultyLogin />} />
      <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
      <Route path="/faculty/students" element={<FacultyStudents />} />
      <Route path="/faculty/attendance" element={<FacultyAttendance />} />
      <Route path="/faculty/assignments" element={<FacultyAssignments />} />
      <Route path="/faculty/materials" element={<FacultyMaterials />} />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/students" element={<AdminManageStudents />} />
      <Route path="/admin/faculty" element={<AdminManageFaculty />} />
      <Route path="/admin/departments" element={<AdminDepartments />} />
      <Route path="/admin/reports" element={<AdminReports />} />
    </Routes>
  );
}

export default App;