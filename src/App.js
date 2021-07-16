import React,{useState} from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import EmployeeData from "./Data.json";

function App() {

  const [employeeDetails, setEmployeeDetails] = useState([])
  const [display, setDisplay] = useState(false)

  const toparent = (SingleEmpData)=>{
    setEmployeeDetails(SingleEmpData)
    console.log("Inparent", SingleEmpData)
    console.log("length", employeeDetails.length)
    if(!employeeDetails.length===0 || employeeDetails.length ===undefined){
      setDisplay(true)
    }
  }
  return (
    <div className="App col-12">
      <SearchBar toparent={toparent} data={EmployeeData} />
      <div className="emp-details">
          {display&&`Name : ${employeeDetails.employee_name},\nAge : ${employeeDetails.id},\nSalary : ${employeeDetails.employee_salary}`}
      </div>
    </div>
  );
}

export default App;
