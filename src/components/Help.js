import React from 'react';
import './Help.css'; // Import the CSS file

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-header">
        <h1>Need Help? We're Here for You!</h1>
        <p>Welcome to the Help page. Browse through the sections below for assistance.</p>
      </div>
      
      <div className="help-content">
        <section className="help-section">
          <h2>Getting Started</h2>
          <p>
            Learn how to get started with our platform and make the most out of your experience.
          </p>
          <ul>
            <li><a href="#create-account">How to Create an Account?</a></li>
            <li><a href="#setting-up">Setting Up Your Profile</a></li>
            <li><a href="#explore-features">Exploring Features</a></li>
          </ul>
        </section>

        <section className="help-section">
          <h2>Account & Privacy</h2>
          <p>
            Manage your account and privacy settings here. Ensure your account is safe and secure.
          </p>
          <ul>
            <li><a href="#change-password">How to Change Password?</a></li>
            <li><a href="#privacy-settings">Privacy Settings</a></li>
            <li><a href="#deactivate-account">Deactivate Your Account</a></li>
          </ul>
        </section>

        <section className="help-section">
          <h2>Contact Support</h2>
          <p>
            If you need further assistance, feel free to reach out to our support team.
          </p>
          <p>
            Email us at: <a href="mailto:support@ourcompany.com">support@ourcompany.com</a>
          </p>
        </section>
      </div>

      <div className="help-footer">
        <p>&copy; 2025 Our Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Help;
