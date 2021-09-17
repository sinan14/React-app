import React, { Component } from "react";
import axios from "axios";
class Employee extends Component {
  constructor(props) {
    super();
    this.state = {
      empid: "",
      name: "",
      age: "",
      designation: "",
      department: "",
      salary: "",
    };
    this.onChangeEmpID = this.onChangeEmpID.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeDesignation = this.onChangeDesignation.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChangeEmpID(e) {
    this.setState({ empid: e.target.value });
  }
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeAge(e) {
    this.setState({ age: e.target.value });
  }
  onChangeDesignation(e) {
    this.setState({ designation: e.target.value });
  }
  onChangeDepartment(e) {
    this.setState({ department: e.target.value });
  }
  onChangeSalary(e) {
    this.setState({ salary: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const employee = {
      empid: this.state.empid,
      name: this.state.name,
      age: this.state.age,
      designation: this.state.designation,
      department: this.state.department,
      salary: this.state.salary,
    };

    console.log(employee);

    axios
      .post("http://localhost:5000/employee/add", employee)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="container">
        <h3>Create New Employee</h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>Employee ID: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.empid}
              onChange={this.onChangeEmpID}
            />
          </div>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>
          <div className="form-group">
            <label>Designation: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.designation}
              onChange={this.onChangeDesignation}
            />
          </div>
          <div className="form-group">
            <label>Department: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.department}
              onChange={this.onChangeDepartment}
            />
          </div>
          <div className="form-group">
            <label>Salary: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.salary}
              onChange={this.onChangeSalary}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Save" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default Employee;
