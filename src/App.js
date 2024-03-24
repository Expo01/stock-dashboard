// PROJECT USING JAVASCRIPT LIBRARY- REACT.JS

import './App.css';
import Dashboard from './components/Dashboard';
import ThemeContext from './context/ThemeContext';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    // imported dashboard so we display this from the dashboard.js file. wrapped with theme contxt
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}> {/* contains object for dark mode and function for setting it*/}
      <Dashboard/> 
    </ThemeContext.Provider>
  );
}

export default App;

// React Context (in not so many words) will allows us to apply dark theme throughout 
// without having to pass from dash to header to search to search results, etc.