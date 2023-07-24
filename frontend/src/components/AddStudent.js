import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddStudent(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    let navigate = useNavigate();

    //submit button function
    function submitButton(e){
      e.preventDefault();  //prevent default behaviour of form submit
      //alert("Student added");

      const newStudent = {
        name,
        age,
        gender
      }
      
      //backend url: http://localhost:7070/student/add
      axios.post("http://localhost:7070/student/add", newStudent)
      .then(()=>{
        console.log(newStudent);

        setName("");
        setAge("");
        setGender("");

        alert("Student added");
        
        navigate("/view");

      }).catch((err)=>{
        alert(err);
      })

    }

    return(
      <div className="container">

      <form onSubmit={submitButton}>
        <div className="mb-3">
          <label for="name" className="form-label">Student name</label>
          <input type="text" className="form-control" id="name" aria-describedby="name"
          onChange={(e)=>{
            setName(e.target.value);
          }}
          
          />
        </div>
        
        <div className="mb-3">
          <label for="age" className="form-label">Student age</label>
          <input type="text" className="form-control" id="age" aria-describedby="age"
          onChange={(e)=>{
            setAge(e.target.value);
          }}/>
        </div>

        <div className="mb-3">
          <label for="gender" className="form-label">Student gender</label>
          <input type="text" className="form-control" id="gender" aria-describedby="gender"
          onChange={(e)=>{
            setGender(e.target.value);
          }}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      </div>
      
        
    )
}

export default AddStudent;