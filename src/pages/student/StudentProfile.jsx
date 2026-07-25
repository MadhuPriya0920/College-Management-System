import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";


export default function StudentProfile() {

  const studentName = localStorage.getItem("studentName") || "Student";
  const regNo = localStorage.getItem("studentRegNo") || "24MIS0000";

  return (
    <>
      <Navbar />

      <div className="page">

        <div className="page-card">

          <h1>Student Profile</h1>

          <table>
            <tbody>

              <tr>
                <th>Registration No</th>
                <td>{regNo}</td>
              </tr>

              <tr>
                <th>Name</th>
                <td>{studentName}</td>
              </tr>

              <tr>
                <th>Programme</th>
                <td>Integrated M.Tech Software Engineering</td>
              </tr>

              <tr>
                <th>Semester</th>
                <td>5</td>
              </tr>

              <tr>
                <th>School</th>
                <td>School of Computer Science and Engineering</td>
              </tr>

              <tr>
                <th>Email</th>
                <td>{regNo.toLowerCase()}@vitstudent.ac.in</td>
              </tr>

              <tr>
                <th>Campus</th>
                <td>VIT Vellore</td>
              </tr>

              <tr>
                <th>Status</th>
                <td>Active</td>
              </tr>

            </tbody>
          </table>

        </div>

      </div>

      <Footer />
    </>
  );
}