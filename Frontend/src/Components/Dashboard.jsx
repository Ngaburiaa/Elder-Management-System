
import React, { useState } from 'react';
import { MdElderly, MdHealthAndSafety } from 'react-icons/md';
import { FaHandsHelping, FaUserNurse } from 'react-icons/fa';
import { Outlet, useLocation } from 'react-router-dom';
import "../dashboard.css"
import Header from './Header';
import Sidebar from './Sidebar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const location = useLocation();
  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);
  const local = JSON.parse(localStorage.getItem("userName"));
  const data = [
    { name: 'Jan', users: 120, caregivers: 40, alerts: 15 },
    { name: 'Feb', users: 150, caregivers: 50, alerts: 10 },
    { name: 'Mar', users: 180, caregivers: 60, alerts: 12 },
    { name: 'Apr', users: 200, caregivers: 70, alerts: 8 },
    { name: 'May', users: 250, caregivers: 80, alerts: 9 },
    { name: 'Jun', users: 300, caregivers: 90, alerts: 11 },
  ];
  const isDashboardDefault = location.pathname === '/Dashboard';

  return (
    <main className='main-container'>
      <Header openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} /> 
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <div className="dashboard-wrapper">
     
        <div className={`dashboard-content ${openSidebarToggle ? "sidebar-open" : ''}`}>
                <Outlet />
          {isDashboardDefault && (
            <div className="dashboard-inner">
              <div className='main-title'>
                <h3>ELDERLY MANAGEMENT DASHBOARD</h3>
                <p style={{ fontSize: "1.69em", fontWeight: "700" }}>Welcome {local}</p>
              </div>
              <div className='main-cards'>
                <div className='card'><div className='card-inner'><h3>ELDERLY USERS</h3><MdElderly className='card_icon' /></div><h1>320</h1></div>
                <div className='card'><div className='card-inner'><h3>CAREGIVERS</h3><FaUserNurse className='card_icon' /></div><h1>95</h1></div>
                <div className='card'><div className='card-inner'><h3>ACTIVE ALERTS</h3><MdHealthAndSafety className='card_icon' /></div><h1>12</h1></div>
                <div className='card'><div className='card-inner'><h3>ASSISTANCE REQUESTS</h3><FaHandsHelping className='card_icon' /></div><h1>25</h1></div>
              </div>
              <div className='charts'>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
                    <Bar dataKey="users" fill="#8884d8" name="Elderly Users" />
                    <Bar dataKey="caregivers" fill="#82ca9d" name="Caregivers" />
                  </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
                    <Line type="monotone" dataKey="alerts" stroke="#FF5733" activeDot={{ r: 8 }} name="Alerts" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { MdElderly, MdHealthAndSafety } from 'react-icons/md';
// import { FaHandsHelping, FaUserNurse } from 'react-icons/fa';
// import { Outlet, useLocation } from 'react-router-dom';
// import "../dashboard.css";
// import Header from './Header';
// import Sidebar from './Sidebar';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// function Dashboard() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const location = useLocation();
//   const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);
//   const local = JSON.parse(localStorage.getItem("userName"));
//   const data = [
//     { name: 'Jan', users: 120, caregivers: 40, alerts: 15 },
//     { name: 'Feb', users: 150, caregivers: 50, alerts: 10 },
//     { name: 'Mar', users: 180, caregivers: 60, alerts: 12 },
//     { name: 'Apr', users: 200, caregivers: 70, alerts: 8 },
//     { name: 'May', users: 250, caregivers: 80, alerts: 9 },
//     { name: 'Jun', users: 300, caregivers: 90, alerts: 11 },
//   ];
//   const isDashboardDefault = location.pathname === '/Dashboard';

//   useEffect(() => {
//     const dashboardContent = document.querySelector('.dashboard-content');
//     if (dashboardContent) {
//       dashboardContent.style.height = '100vh'; // Ensure full height initially
//       dashboardContent.style.minHeight = '100vh'; // Maintain full height minimum
//     }
//   }, [location.pathname]); // Re-run when component changes

//   return (
//     <main className='main-container'>
//       <Header openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} /> 
//       <div className="dashboard-wrapper">
//         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//         <div className={`dashboard-content ${openSidebarToggle ? "sidebar-open" : ''}`}>
//           <Outlet />
//           {isDashboardDefault && (
//             <div className="dashboard-inner">
//               <div className='main-title'>
//                 <h3>ELDERLY MANAGEMENT DASHBOARD</h3>
//                 <p style={{ fontSize: "1.69em", fontWeight: "700" }}>Welcome {local}</p>
//               </div>
//               <div className='main-cards'>
//                 <div className='card'><div className='card-inner'><h3>ELDERLY USERS</h3><MdElderly className='card_icon' /></div><h1>320</h1></div>
//                 <div className='card'><div className='card-inner'><h3>CAREGIVERS</h3><FaUserNurse className='card_icon' /></div><h1>95</h1></div>
//                 <div className='card'><div className='card-inner'><h3>ACTIVE ALERTS</h3><MdHealthAndSafety className='card_icon' /></div><h1>12</h1></div>
//                 <div className='card'><div className='card-inner'><h3>ASSISTANCE REQUESTS</h3><FaHandsHelping className='card_icon' /></div><h1>25</h1></div>
//               </div>
//               <div className='charts'>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
//                     <Bar dataKey="users" fill="#8884d8" name="Elderly Users" />
//                     <Bar dataKey="caregivers" fill="#82ca9d" name="Caregivers" />
//                   </BarChart>
//                 </ResponsiveContainer>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
//                     <Line type="monotone" dataKey="alerts" stroke="#FF5733" activeDot={{ r: 8 }} name="Alerts" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Dashboard;