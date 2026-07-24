import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./StudentTimetable.css";

export default function StudentTimetable() {
  return (
    <>
      <Navbar />

      <div className="page">
        <div className="page-card">

          <h1>Today's Timetable</h1>

          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Course</th>
              </tr>
            </thead>

            <tbody>
              <tr><td>09:00 - 10:00</td><td>Software Engineering</td></tr>
              <tr><td>10:00 - 11:00</td><td>Cloud Computing</td></tr>
              <tr><td>11:30 - 12:30</td><td>Agile & DevOps</td></tr>
              <tr><td>02:00 - 03:00</td><td>Database Systems</td></tr>
            </tbody>

          </table>

        </div>
      </div>

      <Footer />
    </>
  );
}