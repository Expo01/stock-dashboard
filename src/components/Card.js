// container component?
// component is a section of reusable jsx code which is like HTML code that can contain JS
    // and converts HTML tags into react elements
// card component - contains picture, item and description typically
// prop = property. parent component can send data to a child component
// when you include a component within a parent you can send the child component key value pairs

import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";



const Card = ({ children }) => { // takes children 'prop' (property?) so children can be used
    // directly in the output...

    const {darkMode} = useContext(ThemeContext);

  return ( // darkmode here sets card background and color
    <div className={`w-full h-full rounded-md relative p-8 border-2 ${
      darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"}`}>
      {children}
    </div>
  );
};

export default Card;