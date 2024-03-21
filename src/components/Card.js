// container component?
// component is a section of reusable jsx code which is like HTML code that can contain JS
    // and converts HTML tags into react elements
// card component - contains picture, item and description typically
// prop = property. parent component can send data to a child component
// when you include a component within a parent you can send the child component key value pairs

import React from "react";

const Card = ({ children }) => { // takes children 'prop' (property?) so children can be used
    // directly in the output...
  return (
    <div className="w-full h-full rounded-md relative p-8 border-2 color:grey">
      {children}
    </div>
  );
};

export default Card;