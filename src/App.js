// PROJECT USING JAVASCRIPT LIBRARY- REACT.JS

import './App.css';
import Dashboard from './components/Dashboard';
import StockContext from './context/StockContext';
import ThemeContext from './context/ThemeContext';
import { useState } from 'react';

function App() {
  // create global state for selected stock symbol

  const [stockSymbol, setStockSymbol] = useState("FB");
  const [darkMode, setDarkMode] = useState(false);

  return (
    // imported dashboard so we display this from the dashboard.js file. wrapped with theme contxt
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}> {/* contains object for dark mode and function for setting it*/}
      <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
        <Dashboard/>
      </StockContext.Provider>
       
    </ThemeContext.Provider>
    // the purpose of useContext is that a context can be used from any component withouth having
// to pass it around. think of how a class passes accessibility of its methods to all subclasses. 
// That's kind of what we are doing here but not with subclasses. Instead, just nested child components
// say the ThemeContext is to be applied to everything. It is labeled as the Provider, where all 
// things within its tags will have access to the ThemeContext without some tedious import chain, 
// passing from Dashboard to header or card or wherever. Instead, you can just import the Context
// into the component and indicate the component is a receiver by calling UseContext function. 
// above we see that ThemeContext wraps StockContext which wraps Dashboard. ultimately, dashboard 
// and all of its children can call UseContext to access those contexts. 
  );
}

export default App;

// React Context (in not so many words) will allows us to apply dark theme throughout 
// without having to pass from dash to header to search to search results, etc.

// useEffect (seen in Dashboard) re-renders page with any/all changes that occurs on page. 
// just be careful not to get in a feedback loop where page changes, useEffect runs and changes 
// something, which changes the page, calls useEffect again, etc.

// useState is for making variables/data reactive and causes page re-render and not just 
// console only output 