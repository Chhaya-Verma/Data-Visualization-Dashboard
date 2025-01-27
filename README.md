# Data Visualization Dashboard

This project is a **Data Visualization Dashboard** built with **React**. It provides a user-friendly interface for visualizing and analyzing data through various charts and tables. The dashboard includes features such as user authentication, data filtering, and profile management.

## Features

- **User Authentication**: Users can sign up, log in, and reset their passwords.
- **Data Visualization**: Visualize data using bar charts and line charts.
- **Data Filtering**: Filter data based on age, gender, and date range.
- **Profile Management**: Users can update their profile images.
- **Dark Mode**: Toggle between light and dark modes for better user experience.
- **Help Section**: Provides assistance and guidance on using the dashboard.

## Project Structure


## Installation

Follow these steps to set up the project:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/data-visualization-dashboard.git
    cd data-visualization-dashboard
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. Open `http://localhost:3000` in your browser to view the app.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Ejects the project configuration.

## Dependencies

The following dependencies are used in the project:

- **React**
- **React Router DOM**
- **Axios**
- **Firebase**
- **Recharts**
- **Ant Design**
- **Chart.js**
- **JSON Server**
- **Moment.js**
- **React DatePicker**

## Firebase Configuration

The project uses **Firebase** for user authentication. To use Firebase, follow these steps:

1. Create a Firebase project in the Firebase Console.
2. Add Firebase credentials to the `firebase.js` file by replacing the `firebaseConfig` object with your Firebase project's credentials.

## JSON Server

This project uses **JSON Server** to simulate a backend for data storage. To start the JSON Server, follow these steps:

1. **Install JSON Server** globally if you haven't already:
    ```bash
    npm install -g json-server
    ```

2. **Start the JSON Server**:
    ```bash
    json-server --watch server.json --port 5000
    ```

3. This will start the JSON Server on `http://localhost:5000`, simulating a backend for data handling.

## Components

### `Alldata.js`
Displays a table with data and provides filtering options.

### `FeatureBarChart.js`
Renders bar and line charts for data visualization.

### `Help.js`
Provides help and guidance for using the dashboard.

### `ProfileModal.js`
Allows users to update their profile images.

## Pages

### `Dashboard.js`
Main dashboard page with data visualization and filtering options.

### `Login.js`
Login page for user authentication.

### `Signup.js`
Signup page for new user registration.

### `ForgotPassword.js`
Page for resetting user passwords.

## CSS Files

- `App.css`: Styles for the main App component.
- `index.css`: Global styles for the application.
- `Dashboard.css`: Styles for the Dashboard page.
- `Login.css`: Styles for the Login page.
- `Signup.css`: Styles for the Signup page.
- `Alldata.css`: Styles for the Alldata component.
- `Help.css`: Styles for the Help component.
- `ProfileModal.css`: Styles for the ProfileModal component.

## Testing

The project uses **Jest** and **React Testing Library** for testing. To run tests, use the following command:

```bash
npm test
