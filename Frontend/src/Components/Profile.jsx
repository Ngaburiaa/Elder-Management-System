// import React, { useState } from "react";
// import axios from "axios";

// function Profile() {
//   const [profileData, setprofileData] = useState(null);

//   const handleProfile = async () => {
//     try {
//       const local = JSON.parse(localStorage.getItem("userName"));
//       console.log(local)

//       if (!local) {
//         console.error("No username found in localStorage");
//         return;
//       }

//       const response = await axios.get(
//         `http://localhost:3000/users?value=${encodeURIComponent(local)}`
//       );
    
//       setprofileData(response.data)

//     } catch (error) {
//       console.error("Error fetching profile:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleProfile}>My profile</button>
//       {profileData && (
//         <div>
//           <p>Username: {profileData.userName}</p>
//           <p>Full Name: {profileData.fullName}</p>
//           <p>Email: {profileData.email}</p>
//           <p>Age: {profileData.Age}</p>
//           <p>Phone: {profileData.phone}</p>
//           <p>Emergency Contact name: {profileData.contactName}</p>
//           <p>Emergency Contact phone no: {profileData.contactPhone}</p>
//           <p>Health status: {profileData. healthStatus}</p>

//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;

import React, { useState } from "react";
import axios from "axios";

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProfile = async () => {
    setIsLoading(true);
    try {
      const local = JSON.parse(localStorage.getItem("userName"));
      console.log(local);

      if (!local) {
        console.error("No username found in localStorage");
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/users?value=${encodeURIComponent(local)}`
      );
    
      setProfileData(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    container: {
      maxWidth: '700px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: "'Segoe UI', Arial, sans-serif",
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
    },
    button: {
      backgroundColor: '#6b48ff',
      color: 'white',
      padding: '12px 30px',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(107, 72, 255, 0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    buttonHover: {
      backgroundColor: '#5436d9',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(107, 72, 255, 0.4)',
    },
    profileCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      padding: '30px',
      marginTop: '25px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    profileItem: {
      padding: '15px 0',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    label: {
      color: '#6b48ff',
      fontWeight: '600',
      fontSize: '16px',
      width: '200px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    value: {
      color: '#2d3436',
      fontSize: '16px',
      fontWeight: '400',
      flex: 1,
    },
    loading: {
      color: '#6b48ff',
      fontSize: '16px',
      textAlign: 'center',
      padding: '20px',
    },
    title: {
      color: '#2d3436',
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '20px',
      textAlign: 'center',
    }
  };

  return (
    <div style={styles.container}>
      <button 
        style={styles.button}
        onClick={handleProfile}
        onMouseOver={e => Object.assign(e.target.style, styles.buttonHover)}
        onMouseOut={e => Object.assign(e.target.style, styles.button)}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span>Loading...</span>
            <span>⌛</span>
          </>
        ) : (
          <>
            <span>My Profile</span>
            <span>👤</span>
          </>
        )}
      </button>

      {isLoading && <div style={styles.loading}>Fetching your profile...</div>}

      {profileData && (
        <div style={styles.profileCard}>
          <h2 style={styles.title}>Your Profile</h2>
          <div style={styles.profileItem}>
            <span style={styles.label}>👤 Username:</span>
            <span style={styles.value}>{profileData.userName}</span>
          </div>
          <div style={styles.profileItem}>
            <span style={styles.label}>🧑 Full Name:</span>
            <span style={styles.value}>{profileData.fullName}</span>
          </div>
          <div style={styles.profileItem}>
            <span style={styles.label}>✉️ Email:</span>
            <span style={styles.value}>{profileData.email}</span>
          </div>
          <div style={styles.profileItem}>
            <span style={styles.label}>🎂 Age:</span>
            <span style={styles.value}>{profileData.Age}</span>
          </div>
          <div style={styles.profileItem}>
            <span style={styles.label}>📞 Phone:</span>
            <span style={styles.value}>{profileData.phone}</span>
          </div>
          <div style={styles.profileItem}>
            <span style={styles.label}>🔔 Emergency Contact:</span>
            <span style={styles.value}>{profileData.contactName}</span>
          </div>
          <div style={styles.profileItem}>
            <span style={styles.label}>📱 Contact Phone:</span>
            <span style={styles.value}>{profileData.contactPhone}</span>
          </div>
          <div style={styles.profileItem}>
            <span style={styles.label}>❤️ Health Status:</span>
            <span style={styles.value}>{profileData.healthStatus}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
