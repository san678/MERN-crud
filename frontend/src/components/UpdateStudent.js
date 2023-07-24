import React from 'react';
import {useState, useEffect} from 'react'; //useEffect is used to fetch data from backend
import axios from 'axios'; //axios is used to make http requests to backend
import { useNavigate, useParams } from 'react-router-dom'; //useNavigate is used to navigate to a different page

function UpdateStudent(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const paramID = useParams("");
    let navigate = useNavigate();

    useEffect(() => {
        
          axios
            .get(`http://localhost:7070/student/get/`+ paramID.id) //backend url: http://localhost:7070/student/
            .then((res) => {
              console.log(res.data);
              setName(res.data.student.name);
                setAge(res.data.student.age);
                setGender(res.data.student.gender);
              //console.log(setStudents);
            })
            .catch((err) => {
              alert(err);
              console.log(err);
            });
      }, []);

    function submitButton(e){
        e.preventDefault();  //prevent default behaviour of form submit
        //alert("Student added");
  
        const newStudent = {
          name,
          age,
          gender
        }
        
        //backend url: http://localhost:7070/student/add
        axios.put(`http://localhost:7070/student/update/${paramID.id}`, newStudent)
        .then(()=>{
          console.log(newStudent)
          alert("Student updated");
          setName("");
          setAge("");
          setGender("");

          navigate("/view");
  
        }).catch((err)=>{
          alert(err);
        })
  
      }



    return(

        <div>
            <form onSubmit={submitButton}>
        <div className="mb-3">
          <label for="name" className="form-label">Student name</label>
          <input type="text" className="form-control" id="name" aria-describedby="name"
          onChange={(e)=>{
            setName(e.target.value);
          }}
          value={name}/>
        </div>
        
        <div className="mb-3">
          <label for="age" className="form-label">Student age</label>
          <input type="text" className="form-control" id="age" aria-describedby="age"
          onChange={(e)=>{
            setAge(e.target.value);
          }}
          value={age}/>
        </div>

        <div className="mb-3">
          <label for="gender" className="form-label">Student gender</label>
          <input type="text" className="form-control" id="gender" aria-describedby="gender"
          onChange={(e)=>{
            setGender(e.target.value);
          }}
          value={gender}/>
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
        </div>
    )
}

export default UpdateStudent;