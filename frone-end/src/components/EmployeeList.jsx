import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Employee = props => (
    <tr>
        <td>{props.employee.empid}</td>
        <td>{props.employee.name}</td>
        <td>{props.employee.age}</td>
        <td>{props.employee.designation}</td>
        <td>{props.employee.department}</td>
        <td>{props.employee.salary}</td>
        <td>
            <button className="btn btn-secondary"><Link to={"/edit/"+props.employee._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteEmployee(props.employee._id) }}>Delete</button>
        </td>
    </tr>
)

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: []
        }
       this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employee/')
            .then(res => {
                this.setState({ employee: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteEmployee(id) {
        axios.delete('http://localhost:5000/employee/' +id)
            .then(res => console.log(res.data));

        this.setState({ employee: this.state.employee.filter(el => el._id !== id)})
    }

    employeeList() {
        return this.state.employee.map(currentemployee => {
            return <Employee employee={currentemployee} deleteEmployee={this.deleteEmployee} key={currentemployee._id} />
        })
    }

    render() { 
        return ( 
            <div className="container">
                <h3>Employee Details</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>EmpID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.employeeList()}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default EmployeeList;