import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function StudentLogin() {

const navigate = useNavigate();

const [regNo,setRegNo]=useState("");
const [password,setPassword]=useState("");

const students={

"24MIS0143":"MOUNIKA P",
"24MIS0151":"MADHU PRIYA K B",
"24MIS0168":"VENGASREE G",
"24MIS0084":"JEEVANA",
"24MIS0411":"GAGANA PRIYA",
"24MIS0418":"REKHA SAMHITHA",
"24MIS0426":"TRAYA"

};

const demoNames=[
"SITA",
"RAM",
"ANJI",
"KRISHNA",
"LIKITH",
"ROHAN",
"ANVITHA"
];

const handleLogin=()=>{

let studentName;

if(students[regNo]){

studentName=students[regNo];

}
else{

const lastDigit=parseInt(regNo.slice(-1))||0;

studentName=demoNames[lastDigit%demoNames.length];

}

localStorage.setItem("studentName",studentName);
localStorage.setItem("studentRegNo",regNo);

navigate("/student/dashboard");

};

return (
  <>
    <Navbar />

    <div className="login-page">

      <div className="login-card">

        <h1>Student Login</h1>

        <p className="portal-text">
          Enter your registration number to continue
        </p>

        <label>Registration Number</label>

        <input
          type="text"
          placeholder="Enter Registration Number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>

    <Footer />
  </>
);

}

export default StudentLogin;