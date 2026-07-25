import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function HomePage() {

const navigate=useNavigate();

return(

<>

<Navbar/>

<div className="home">

<div className="overlay">

<h1>College Management System</h1>

<p>
Welcome to the College Portal
</p>

<div className="cards">

<div className="card" onClick={()=>navigate("/student/login")}>

<h2>🎓 Student</h2>

<p>Attendance, Courses, Results</p>

</div>

<div className="card" onClick={()=>navigate("/faculty/login")}>

<h2>👨‍🏫 Faculty</h2>

<p>Assignments, Attendance</p>

</div>

<div className="card" onClick={()=>navigate("/admin/login")}>

<h2>👩‍💼 Admin</h2>

<p>Manage College Portal</p>

</div>

</div>

</div>

</div>

<Footer/>

</>

);

}

export default HomePage;