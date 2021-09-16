import React, { Component } from 'react';
import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

class EditEmployee extends Component {

    constructor(props){
        super();
        this.state = {
            empid: "",
            name: "",
            age: "",
            designation: "",
            department: "",
            salary: ""
            
        }
        this.onChangeEmpID = this.onChangeEmpID.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeDesignation = this.onChangeDesignation.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:5000/employee/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    empid: res.data.empid,
                    name: res.data.name,
                    age: res.data.age,
                    designation: res.data.designation,
                    department: res.data.department,
                    salary: res.data.salary,
                })
            })
            .catch(function (error){
                console.log(error);
            })
        
    
    }


    onChangeEmpID(e) {
        this.setState({ empid: e.target.value})
    }
    onChangeName(e) {
        this.setState({ name: e.target.value})
    }
    onChangeAge(e) {
        this.setState({ age: e.target.value})
    }
    onChangeDesignation(e) {
        this.setState({ designation: e.target.value})
    }
    onChangeDepartment(e) {
        this.setState({ department: e.target.value})
    }
    onChangeSalary(e) {
        this.setState({ salary: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        const employee = {
            empid: this.state.empid,
            name: this.state.name,
            age: this.state.age,
            designation: this.state.designation,
            department: this.state.department,
            salary: this.state.salary
        }

        console.log(employee);

        axios.post('http://localhost:5000/employee/update/'+this.props.match.params.id, employee)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Update Employee</h3>
                <form onSubmit={this.onSubmit}>
                    {/* <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} >
                            {
                                this.state.users.map(function(user) {
                                    return <option key={user} value={user}>{user}</option>;
                                })
                            }
                        </select>
                    </div> */}
                    <div className="form-group">
                        <label>Employee ID: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.empid}
                            onChange={this.onChangeEmpID}
                        />
                    </div><div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div><div className="form-group">
                        <label>Age: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                        <label>Designation: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.designation}
                            onChange={this.onChangeDesignation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Department: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.department}
                            onChange={this.onChangeDepartment}
                        />
                    </div>
                    <div className="form-group">
                        <label>Salary: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.salary}
                            onChange={this.onChangeSalary}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label>Duration(in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div> */}
                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditEmployee;