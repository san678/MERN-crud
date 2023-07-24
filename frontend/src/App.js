import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import AddStudent from './components/AddStudent';
import ViewAllStudents from './components/ViewAllStudents';
import UpdateStudent from './components/UpdateStudent';

function App() {
  return (
    <div>
    <Router>
        <Header />
        <Routes>
          <Route exact path="/add" element={<AddStudent/>}/>
          <Route exact path="/view" element={<ViewAllStudents/>}/>
          <Route exact path="/update/:id" element={<UpdateStudent/>}/>
        </Routes>
    </Router>
    </div>
       
  );
}

export default App;
