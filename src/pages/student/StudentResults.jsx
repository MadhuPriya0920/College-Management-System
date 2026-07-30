import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";


export default function StudentResults() {
  return (
    <>
      <Navbar />

      <div className="page">
        <div className="page-card">

          <h1>Semester Results</h1>

          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody>
              <tr><td>Software Engineering</td><td>A</td></tr>
              <tr><td>Cloud Computing</td><td>A+</td></tr>
              <tr><td>Agile & DevOps</td><td>O</td></tr>
              <tr><td>Database Systems</td><td>A</td></tr>
              <tr><td>Web Development</td><td>A+</td></tr>
            </tbody>

          </table>

        </div>
      </div>

      <Footer />
    </>
  );
}