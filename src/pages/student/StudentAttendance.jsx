import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";


export default function StudentAttendance() {
  return (
    <>
      <Navbar />

      <div className="page">

        <div className="page-card">

          <h1>Attendance</h1>

          <table>

            <thead>
              <tr>
                <th>Course</th>
                <th>Attendance</th>
              </tr>
            </thead>

            <tbody>
              <tr><td>Software Engineering</td><td>92%</td></tr>
              <tr><td>Cloud Computing</td><td>95%</td></tr>
              <tr><td>DevOps</td><td>88%</td></tr>
              <tr><td>DBMS</td><td>90%</td></tr>
            </tbody>

          </table>

        </div>

      </div>

      <Footer />
    </>
  );
}