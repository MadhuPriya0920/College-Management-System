import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./StudentCourses.css";

export default function StudentCourses() {
  return (
    <>
      <Navbar />

      <div className="page">
        <div className="page-card">

          <h1>My Courses</h1>

          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Faculty</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>SE301</td>
                <td>Software Engineering</td>
                <td>Dr. Ramesh</td>
              </tr>

              <tr>
                <td>CC302</td>
                <td>Cloud Computing</td>
                <td>Dr. Priya</td>
              </tr>

              <tr>
                <td>DV303</td>
                <td>Agile & DevOps</td>
                <td>Dr. Arun</td>
              </tr>

              <tr>
                <td>DB304</td>
                <td>Database Systems</td>
                <td>Dr. Kavitha</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

      <Footer />
    </>
  );
}