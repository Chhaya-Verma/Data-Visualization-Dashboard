

// ///////try to add tnew features in his code in your project well done working now sidebar but now with navbar do one ctrl +z ///////////
// import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";
// import FeatureBarChart from "../components/FeatureBarChart";
// import { DatePicker } from "antd";
// import "./Dashboard.css"; // Import the CSS file
// import Navbar from "../components/Navbar";
// import { Link, useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; // For navigation
// const { RangePicker } = DatePicker;

// const Dashboard = () => {
//   const [filteredData, setFilteredData] = useState([]);
//   const [selectedBar, setSelectedBar] = useState(null);
//   const [ageFilter, setAgeFilter] = useState("");
//   const [genderFilter, setGenderFilter] = useState("");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const navigate = useNavigate();  // Use navigate to route to Charts page

//   const fetchData = useCallback(async () => {
//     try {
//       const params = {
//         age: ageFilter,
//         gender: genderFilter,
//         startDate: startDate ? startDate.format("YYYY-MM-DD") : "",
//         endDate: endDate ? endDate.format("YYYY-MM-DD") : "",
//       };
//       const response = await axios.get("http://localhost:5000/data", { params });
//       setFilteredData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, [ageFilter, genderFilter, startDate, endDate]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const handleBarClick = (e, feature) => {
//     setSelectedBar(feature);
//   };

//   // Navigate to Charts page with selected filters
//   const handleNavigateToCharts = () => {
//     navigate('/charts', { state: { ageFilter, genderFilter, startDate, endDate } });
//   };

//   return (
//     <div className="dashboard-container">
//       <Navbar />
//       <div className="sidebar">
//         <h2>Dashboard</h2>
//         <ul>
//           <Link to="/data">Data</Link>
//           <li>Calendar</li>
//           <Link to="/charts">Charts</Link>
//           <li>Help</li>
//         </ul>
//       </div>

//       <div className="main-content">
//         <h1>Dashboard</h1>

//         <div style={{ marginBottom: "20px" }}>
//           <label>Age Group:</label>
//           <select onChange={(e) => setAgeFilter(e.target.value)} value={ageFilter}>
//             <option value="">All</option>
//             <option value="15-25">15-25</option>
//             <option value=">25">25+</option>
//           </select>

//           <label>Gender:</label>
//           <select onChange={(e) => setGenderFilter(e.target.value)} value={genderFilter}>
//             <option value="">All</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </div>

//         <RangePicker
//           onChange={(dates) => {
//             setStartDate(dates[0]);
//             setEndDate(dates[1]);
//           }}
//           value={[startDate, endDate]}
//           format="YYYY-MM-DD"
//         />

//         {filteredData.length > 0 ? (
//           <>
//             <h2>Feature Distribution</h2>
//             <FeatureBarChart
//               data={filteredData}
//               xKey="day"
//               barKeys={["A", "B", "C", "D", "E", "F"]}
//               onBarClick={handleBarClick}
//               selectedBar={selectedBar}
//             />
//             <button onClick={handleNavigateToCharts}>Go to Charts</button>
//           </>
//         ) : (
//           <p>Loading data...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




////////////working well with new features in his code in your project well done working now sidebar but now with navbar do one ctrl +z ///////////
// import React, { useEffect, useState } from "react";
// import { Bar, Line } from "react-chartjs-2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement, // <-- Add this
//   Title,
//   Tooltip,
//   Legend,
//   TimeScale,
//   Filler,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement, // <-- Register it here
//   Title,
//   Tooltip,
//   Legend,
//   TimeScale,
//   Filler
// );


// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [selectedFeature, setSelectedFeature] = useState("A"); // Default feature
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [filters, setFilters] = useState({ age: "15-25", gender: "Male" });

//   const [startDate, endDate] = dateRange;

//   // Fetch data from JSON server (port 5000)
//   useEffect(() => {
//     fetch("http://localhost:5000/data")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   // Filter and process data for bar chart
//   const processBarChartData = () => {
//     if (!data.length) return { labels: [], datasets: [] };

//     // Filter by age, gender, and date range
//     const filteredData = data.filter((item) => {
//       const date = new Date(item.day);
//       return (
//         item.age === filters.age &&
//         item.gender === filters.gender &&
//         (!startDate || date >= startDate) &&
//         (!endDate || date <= endDate)
//       );
//     });

//     // Sum values for each feature (A, B, C, etc.)
//     const featureTotals = filteredData.reduce((totals, item) => {
//       Object.keys(item).forEach((key) => {
//         if (["A", "B", "C", "D", "E", "F"].includes(key)) {
//           totals[key] = (totals[key] || 0) + item[key];
//         }
//       });
//       return totals;
//     }, {});

//     return {
//       labels: Object.keys(featureTotals), // Feature names
//       datasets: [
//         {
//           label: "Total Time Spent",
//           data: Object.values(featureTotals), // Feature totals
//           backgroundColor: "rgba(54, 162, 235, 0.6)",
//         },
//       ],
//     };
//   };

//   // Filter and process data for line chart
//   const processLineChartData = () => {
//     if (!data.length || !selectedFeature) return { labels: [], datasets: [] };

//     // Filter by age, gender, and date range
//     const filteredData = data.filter((item) => {
//       const date = new Date(item.day);
//       return (
//         item.age === filters.age &&
//         item.gender === filters.gender &&
//         (!startDate || date >= startDate) &&
//         (!endDate || date <= endDate)
//       );
//     });

//     // Group data by date for the selected feature
//     const featureTrend = filteredData.reduce((trend, item) => {
//       trend[item.day] = (trend[item.day] || 0) + item[selectedFeature];
//       return trend;
//     }, {});

//     return {
//       labels: Object.keys(featureTrend), // Dates
//       datasets: [
//         {
//           label: `${selectedFeature} Time Trend`,
//           data: Object.values(featureTrend), // Feature values
//           borderColor: "rgba(255, 99, 132, 0.6)",
//           fill: true,
//           backgroundColor: "rgba(255, 99, 132, 0.2)",
//         },
//       ],
//     };
//   };

//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       {/* Filters */}
//       <div>
//         <label>Age: </label>
//         <select name="age" onChange={handleFilterChange} value={filters.age}>
//           <option value="15-25">15-25</option>
//           <option value=">25">25</option>
//         </select>

//         <label>Gender: </label>
//         <select name="gender" onChange={handleFilterChange} value={filters.gender}>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//       </div>

//       {/* Date Range Picker */}
//       <div>
//         <label>Date Range: </label>
//         <DatePicker
//           selectsRange
//           startDate={startDate}
//           endDate={endDate}
//           onChange={(update) => setDateRange(update)}
//           isClearable={true}
//         />
//       </div>

//       {/* Bar Chart */}
//       <div>
//         <h2>Bar Chart</h2>
//         <Bar
//           data={processBarChartData()}
//           options={{
//             onClick: (evt, element) => {
//               if (element.length) {
//                 const index = element[0].index;
//                 const feature = processBarChartData().labels[index];
//                 setSelectedFeature(feature);
//               }
//             },
//           }}
//         />
//       </div>

//       {/* Line Chart */}
//       {selectedFeature && (
//         <div>
//           <h2>Line Chart: {selectedFeature}</h2>
//           <Line data={processLineChartData()} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useEffect, useState } from "react";
// import { Bar, Line } from "react-chartjs-2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   TimeScale,
//   Filler,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   TimeScale,
//   Filler
// );

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [selectedFeature, setSelectedFeature] = useState(null); // Default: no feature selected
//   const [filters, setFilters] = useState({ age: "All", gender: "All" });
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   // Fetch data from JSON server (port 5000)
//   useEffect(() => {
//     fetch("http://localhost:5000/data")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   // Filter and process data for bar chart
//   const processBarChartData = () => {
//     if (!data.length) return { labels: [], datasets: [] };

//     // Filter by age, gender, and date range
//     const filteredData = data.filter((item) => {
//       const date = new Date(item.day);
//       return (
//         (filters.age === "All" || item.age === filters.age) &&
//         (filters.gender === "All" || item.gender === filters.gender) &&
//         (!startDate || date >= startDate) &&
//         (!endDate || date <= endDate)
//       );
//     });

//     // Sum values for each feature (A, B, C, etc.)
//     const featureTotals = filteredData.reduce((totals, item) => {
//       Object.keys(item).forEach((key) => {
//         if (["A", "B", "C", "D", "E", "F"].includes(key)) {
//           totals[key] = (totals[key] || 0) + item[key];
//         }
//       });
//       return totals;
//     }, {});

//     return {
//       labels: Object.keys(featureTotals), // Feature names (Y-axis)
//       datasets: [
//         {
//           label: "Total Time Spent",
//           data: Object.values(featureTotals), // Time spent (X-axis)
//           backgroundColor: "rgba(54, 162, 235, 0.6)",
//         },
//       ],
//     };
//   };

//   // Filter and process data for line chart
//   const processLineChartData = () => {
//     if (!data.length || !selectedFeature) return { labels: [], datasets: [] };

//     // Filter data by age, gender, and date range
//     const filteredData = data.filter((item) => {
//       const date = new Date(item.day);
//       return (
//         (filters.age === "All" || item.age === filters.age) &&
//         (filters.gender === "All" || item.gender === filters.gender) &&
//         (!startDate || date >= startDate) &&
//         (!endDate || date <= endDate)
//       );
//     });

//     // Extract dates and corresponding feature values
//     const labels = filteredData.map((item) => item.day); // Dates for the X-axis
//     const dataPoints = filteredData.map((item) => item[selectedFeature]); // Feature values for the Y-axis

//     return {
//       labels, // Exact dates (X-axis)
//       datasets: [
//         {
//           label: `${selectedFeature} Time Trend`,
//           data: dataPoints, // Exact feature values (Y-axis)
//           borderColor: "rgba(75, 192, 192, 0.6)",
//           fill: true,
//           backgroundColor: "rgba(75, 192, 192, 0.2)",
//         },
//       ],
//     };
//   };

//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       {/* Filters */}
//       <div>
//         <label>Age: </label>
//         <select name="age" onChange={handleFilterChange} value={filters.age}>
//           <option value="All">All</option>
//           <option value="15-25">15-25</option>
//           <option value=">25">&gt;25</option>
//         </select>

//         <label>Gender: </label>
//         <select name="gender" onChange={handleFilterChange} value={filters.gender}>
//           <option value="All">All</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//       </div>

//       {/* Start and End Date Pickers */}
//       <div>
//         <label>Start Date: </label>
//         <DatePicker
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           isClearable={true}
//         />
//         <label>End Date: </label>
//         <DatePicker
//           selected={endDate}
//           onChange={(date) => setEndDate(date)}
//           isClearable={true}
//         />
//       </div>

//       {/* Bar Chart */}
//       <div>
//         <h2>Bar Chart</h2>
//         <Bar
//           data={processBarChartData()}
//           options={{
//             indexAxis: "y", // Features on Y-axis
//             onClick: (evt, element) => {
//               if (element.length) {
//                 const index = element[0].index;
//                 const feature = processBarChartData().labels[index];
//                 setSelectedFeature(feature); // Set clicked feature
//               }
//             },
//           }}
//         />
//       </div>

//       {/* Line Chart */}
//       {selectedFeature && (
//         <div>
//           <h2>Line Chart: {selectedFeature}</h2>
//           <Line data={processLineChartData()} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;




import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import { DatePicker } from "antd";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import ProfileModal from "../components/ProfileModal"; // Modal to change profile image
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

const { RangePicker } = DatePicker;

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedBar, setSelectedBar] = useState(null);
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileImage, setProfileImage] = useState("default-profile.png");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(""); // userId from localStorage

  const navigate = useNavigate();

  // Fetch data from the API
  const fetchData = useCallback(async () => {
    try {
      const params = {
        age: ageFilter,
        gender: genderFilter,
        startDate: startDate ? startDate.format("YYYY-MM-DD") : "",
        endDate: endDate ? endDate.format("YYYY-MM-DD") : "",
      };
      const response = await axios.get("http://localhost:5000/data", { params });
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [ageFilter, genderFilter, startDate, endDate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Dark Mode Toggle
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const savedImage = localStorage.getItem("profileImage");
    const savedUserId = localStorage.getItem("userId");

    if (savedMode) setDarkMode(savedMode === "true");
    if (savedImage) setProfileImage(savedImage);
    if (savedUserId) {
      setUserId(savedUserId); // Store userId
    }

    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  // Fetch user data based on userId
  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:5000/users/${userId}`);
          setUsername(response.data.username);
          setEmail(response.data.email);
          setProfileImage(response.data.profileImage || "default-profile.png"); // Default image if not set
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [userId]);

  // Store preferences to localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  const toggleProfileModal = () => setShowProfileModal(!showProfileModal);

  const updateProfileImage = (newImage) => {
    setProfileImage(newImage);
    localStorage.setItem("profileImage", newImage);
  };

  // Process data for Bar Chart
  const processBarChartData = () => {
    if (!filteredData.length) return { labels: [], datasets: [] };

    const featureTotals = filteredData.reduce((totals, item) => {
      Object.keys(item).forEach((key) => {
        if (["A", "B", "C", "D", "E", "F"].includes(key)) {
          totals[key] = (totals[key] || 0) + item[key];
        }
      });
      return totals;
    }, {});

    return {
      labels: Object.keys(featureTotals),
      datasets: [
        {
          label: "Total Time Spent",
          data: Object.values(featureTotals),
          backgroundColor: "#9f37e0",
        },
      ],
    };
  };

  // Process data for Line Chart
  const processLineChartData = () => {
    if (!filteredData.length || !selectedBar) return { labels: [], datasets: [] };

    const labels = filteredData.map((item) => item.day); // Dates for the X-axis
    const dataPoints = filteredData.map((item) => item[selectedBar]); // Feature values for the Y-axis

    return {
      labels,
      datasets: [
        {
          label: `${selectedBar} Time Trend`,
          data: dataPoints,
          borderColor: "#9f37e0",
          fill: true,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    };
  };

  // Logout Function
  const handleLogout = async () => {
    // Clear data from localStorage
    localStorage.removeItem("userId");
    localStorage.removeItem("profileImage");
    localStorage.removeItem("darkMode");

    // Delete the user's login data from the JSON server
    try {
      if (userId) {
        await axios.delete(`http://localhost:5000/logindata/${userId}`);
      }
    } catch (error) {
      console.error("Error deleting user data:", error);
    }

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className={`dashboard-container ${darkMode ? "dark" : "light"}`}>
      <div className="sidebar">
        {/* Profile Section */}
        <div className="profile-section" onClick={toggleProfileModal}>
          <img src={profileImage} alt="Profile" className="profile-img" />
        </div>

        <h3 className="profile-detail-username">UserName: {username}</h3>
        <h3 className="profile-detail-username">Email id: {email}</h3>
        <div className="sidebar-options">
          <button onClick={toggleDarkMode}>
            {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>

          <Link to="/data">Data</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/charts">Charts</Link>
          <Link to="/help">Help</Link>

          {/* Logout Button */}
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>

      <div className="main-content">
        <h1 className="dashboard-heading">Dashboard</h1>

        {/* Filters Section */}
        <div className="filters">
          <label>Age Group:</label>
          <select onChange={(e) => setAgeFilter(e.target.value)} value={ageFilter}>
            <option value="">All</option>
            <option value="15-25">15-25</option>
            <option value=">25">25+</option>
          </select>

          <label>Gender:</label>
          <select onChange={(e) => setGenderFilter(e.target.value)} value={genderFilter}>
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <RangePicker
          onChange={(dates) => {
            setStartDate(dates[0]);
            setEndDate(dates[1]);
          }}
          value={[startDate, endDate]}
          format="YYYY-MM-DD"
        />

        {/* Chart Section */}
        {filteredData.length > 0 ? (
          <>
            <h2 className="feature-heading">Feature Distribution</h2>
            <div>
              <Bar
                data={processBarChartData()}
                options={{
                  indexAxis: "y",
                  onClick: (evt, element) => {
                    if (element.length) {
                      const index = element[0].index;
                      const feature = processBarChartData().labels[index];
                      setSelectedBar(feature);
                    }
                  },
                }}
              />
            </div>

            {selectedBar && (
              <div>
                <h2>Line Chart: {selectedBar}</h2>
                <Line
                  data={processLineChartData()}
                  options={{
                    responsive: true,
                    scales: {
                      x: {
                        ticks: {
                          maxRotation: 45,
                          minRotation: 0,
                          autoSkip: false,
                        },
                        grid: {
                          display: true,
                        },
                      },
                    },
                  }}
                />
              </div>
            )}
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </div>

      {showProfileModal && (
        <ProfileModal
          isOpen={showProfileModal}
          closeModal={toggleProfileModal}
          updateProfileImage={updateProfileImage}
        />
      )}
    </div>
  );
};

export default Dashboard;
