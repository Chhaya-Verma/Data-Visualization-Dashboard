import React, { useState } from 'react';
import './ProfileModal.css';

const ProfileModal = ({ isOpen, closeModal, updateProfileImage }) => {
  // Set the default profile image URL
  const defaultProfileImage = 'https://cdn-icons-png.flaticon.com/512/5951/5951752.png';
  
  // Track the new profile image (if any is selected by the user)
  const [newImage, setNewImage] = useState(null);

  // Handle the image file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  // Handle save and update the profile image
  const handleSave = () => {
    if (newImage) {
      updateProfileImage(newImage); // Pass the new image URL to the parent component
    } else {
      updateProfileImage(defaultProfileImage); // If no new image, use the default image
    }
    closeModal(); // Close the modal after saving the image
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          {/* File input to upload a new image */}
          <input type="file" accept="image/*" onChange={handleImageChange} />
          
          {/* Display the current profile image */}
          <img
            src={newImage || defaultProfileImage} // Show new image if available, else default image
            alt="Profile"
            className="profile-img"
          />
          
          {/* Save button */}
          <button onClick={handleSave}>Save</button>
          
          {/* Cancel button */}
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    )
  );
};

export default ProfileModal;
