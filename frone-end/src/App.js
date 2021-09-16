import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
// import ExercisesList from "./components/ExercisesList";
//import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import EmployeeList from "./components/EmployeeList";

import Employee from './components/Employee';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Route exact path="/" component={EmployeeList} />
      <Route path="/edit/:id" component={EditEmployee} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/createmp" component={Employee} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
