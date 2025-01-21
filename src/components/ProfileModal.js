// import React, { useState } from "react";

// const ProfileModal = ({ isOpen, closeModal }) => {
//   const [image, setImage] = useState("default-profile.png");
//   const [email, setEmail] = useState("example@domain.com");

//   // Handling image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file)); // Update profile image preview
//     }
//   };

//   const handleSave = () => {
//     // Save updated email and photo logic (implement API call if needed)
//     console.log("Updated Data: ", { email, image });
//     closeModal(); // Close the modal after saving
//   };

//   if (!isOpen) return null;

//   return (
//     <div style={modalStyles}>
//       <div style={modalContentStyles}>
//         <button onClick={closeModal} style={closeButtonStyles}>
//           X
//         </button>
//         <h2 style={headerStyles}>Profile</h2>
//         <div style={profileInfoStyles}>
//           <img
//             src={image}            alt="Profile"
//             style={imageStyles}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             style={fileInputStyles}
//           />
//           <div style={emailSectionStyles}>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               readOnly
              
//             />
//           </div>
//           <button onClick={handleSave} style={saveButtonStyles}>
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styling for modal (you can improve based on your needs)
// const modalStyles = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 1000,
// };

// const modalContentStyles = {
//   backgroundColor: "white",
//   padding: "30px",
//   borderRadius: "8px",
//   minWidth: "350px",
//   textAlign: "center",
//   position: "relative",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// };

// const closeButtonStyles = {
//   position: "absolute",
//   top: "10px",
//   right: "10px",
//   border: "none",
//   backgroundColor: "transparent",
//   fontSize: "20px",
//   cursor: "pointer",
// };

// const headerStyles = {
//   fontSize: "24px",
//   fontWeight: "bold",
//   marginBottom: "20px",
// };

// const profileInfoStyles = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const imageStyles = {
//   width: "120px",
//   height: "120px",
//   borderRadius: "50%",
//   objectFit: "cover",
//   marginBottom: "20px",
// };

// const fileInputStyles = {
//   margin: "10px 0",
// };

// const emailSectionStyles = {
//   marginBottom: "20px",
// };

// const saveButtonStyles = {
//   padding: "10px",
//   backgroundColor: "#4CAF50",
//   color: "white",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
//   marginTop: "10px",
// };

// export default ProfileModal;




// ProfileModal.js
// ProfileModal.js (inside components folder)

import React, { useState } from 'react';
import './ProfileModal.css';
const ProfileModal = ({ isOpen, closeModal, updateProfileImage }) => {
  const [newImage, setNewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (newImage) {
      updateProfileImage(newImage);
      closeModal();
    }
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {newImage && <img src={newImage} alt="New Profile" className="profile-img" />}
          <button onClick={handleSave}>Save</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    )
  );
};

export default ProfileModal;  // Ensure default export
