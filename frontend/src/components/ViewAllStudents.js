import React from "react";
import { useState, useEffect } from "react"; //useEffect is used to fetch data from backend
import axios from "axios"; //axios is used to make http requests to backend
import { useNavigate, useParams } from "react-router-dom"; //useNavigate is used to navigate to a different page
import { Link } from "react-router-dom";

import '../App.css';

function ViewAllStudents() {
  const [students, setStudents] = useState([]); //students is an array of objects [{}
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");

  //const [userID, setUserID] = useState(""); //get the id from the url
   const id = useParams(); //get the id from the url
  useEffect(() => {
    function getStudents() {
      axios
        .get(`http://localhost:7070/student/`) //backend url: http://localhost:7070/student/
        .then((res) => {
          console.log(res.data);
          setStudents(res.data);
          //console.log(setStudents);
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
    }
    getStudents();
  }, []);

    let navigate = useNavigate();
    function gotoEdit(id) {
        navigate("/update/" + id);
    }


  function DeleteStudent(id) {


    axios
        .delete(`http://localhost:7070/student/delete/${id}`) //backend url: http://localhost:7070/student/delete/${userID}
        .then((res) => {
            console.log(res.data);
            alert("Student deleted");
            //navigate("/view");
        })
        .catch((err) => {
            alert(err);
            console.log(err);
        });
    }

  return (
    <div class="row">
      {students.map((item, key) => (
        <div class="col-sm-6 mb-3 mb-sm-0" key={key}>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{item._id}</h5>
              <p class="card-text">Name : {item.name}</p>
              <p class="card-text">Age : {item.age}</p>
              <p class="card-text">Gender : {item.gender}</p>

              <div class="btn-group" role="group" aria-label="First group">
              <div class="btn btn-warning" 
              onClick={()=>{gotoEdit(item._id)}} > Edit
                {/* <Link to={"/update/" + item._id}>
                
                  Edit
              
              </Link> */}

                </div>
                <a href="/view" class="btn btn-danger" onClick={()=> DeleteStudent(item._id)}>
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewAllStudents;
