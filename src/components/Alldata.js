import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Alldata.css';

function Alldata() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({
        gender: "",
        age: ""
    });

    useEffect(() => {
        // Fetch data from the JSON server
        axios.get('http://localhost:5000/data')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data:", error);
            });
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({
            ...filter,
            [name]: value
        });
    };

    // Filter data based on selected filters
    const filteredData = data.filter((item) => {
        return (
            (filter.gender === "" || item.gender === filter.gender) &&
            (filter.age === "" || item.age === filter.age)
        );
    });

    // Calculate total users and gender distribution
    const totalUsers = filteredData.length;
    const maleCount = filteredData.filter(item => item.gender === "Male").length;
    const femaleCount = filteredData.filter(item => item.gender === "Female").length;

    // Calculate the total count of features A, B, C, D, E, F
    const totalFeatures = {
        A: filteredData.reduce((sum, item) => sum + (item.A || 0), 0),
        B: filteredData.reduce((sum, item) => sum + (item.B || 0), 0),
        C: filteredData.reduce((sum, item) => sum + (item.C || 0), 0),
        D: filteredData.reduce((sum, item) => sum + (item.D || 0), 0),
        E: filteredData.reduce((sum, item) => sum + (item.E || 0), 0),
        F: filteredData.reduce((sum, item) => sum + (item.F || 0), 0)
    };

    // Calculate age group distribution
    const age15to25 = filteredData.filter(item => item.age === "15-25").length;
    const ageAbove25 = filteredData.filter(item => item.age === ">25").length;

    return (
        <div className="table-container">
            <h1>Data Table</h1>
            
            {/* Displaying Summary Information */}
            <div className="summary">
                <div className="summary-item">
                    <h3>Total Users</h3>
                    <p>{totalUsers}</p>
                </div>
                <div className="summary-item">
                    <h3>Male Users</h3>
                    <p>{maleCount}</p>
                </div>
                <div className="summary-item">
                    <h3>Female Users</h3>
                    <p>{femaleCount}</p>
                </div>
                <div className="summary-item">
                    <h3>15-25 Age Group</h3>
                    <p>{age15to25}</p>
                </div>
                <div className="summary-item">
                    <h3>Above 25 Age Group</h3>
                    <p>{ageAbove25}</p>
                </div>
                <div className="summary-item">
                    <h3>Total Feature A</h3>
                    <p>{totalFeatures.A}</p>
                </div>
                <div className="summary-item">
                    <h3>Total Feature B</h3>
                    <p>{totalFeatures.B}</p>
                </div>
                <div className="summary-item">
                    <h3>Total Feature C</h3>
                    <p>{totalFeatures.C}</p>
                </div>
                <div className="summary-item">
                    <h3>Total Feature D</h3>
                    <p>{totalFeatures.D}</p>
                </div>
                <div className="summary-item">
                    <h3>Total Feature E</h3>
                    <p>{totalFeatures.E}</p>
                </div>
                <div className="summary-item">
                    <h3>Total Feature F</h3>
                    <p>{totalFeatures.F}</p>
                </div>
            </div>

            {/* Filters */}
            <div className="filters">
                <select name="gender" onChange={handleFilterChange} value={filter.gender}>
                    <option value="">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select name="age" onChange={handleFilterChange} value={filter.age}>
                    <option value="">All Age Groups</option>
                    <option value="15-25">15-25</option>
                    <option value=">25">25+</option>
                </select>
            </div>
            
            {/* Data Table */}
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                        <th>F</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.day}</td>
                            <td>{row.age}</td>
                            <td>{row.gender}</td>
                            <td>{row.A}</td>
                            <td>{row.B}</td>
                            <td>{row.C}</td>
                            <td>{row.D}</td>
                            <td>{row.E}</td>
                            <td>{row.F}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Alldata;
