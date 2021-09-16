import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Employee Dashboard</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Employees</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/createmp" className="nav-link">Create Employee</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default Navbar;