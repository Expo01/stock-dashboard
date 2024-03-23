import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

// instead of putting all this goop in the dashboard and cluttering the code, just removed the
// content and placed in new file and inserted a <header> tag/element in the dashboard
const Header = ({ name }) => { 
    {/*'mockCompanyDetails.name passed to Header in dashboard and sent to this function */}
  return (
    <>
      <div className="xl:px-32">
        <h1 className="text-5xl">{name}</h1> 
        <Search /> {/* this is the search bar. looks like components are implemented with this tag-like sytax, now a react 'element' */}
      </div>
      <ThemeIcon /> {/* interestingly have a component that references another component via the element tag
      where it here includes the 'moon' icon into the header and Dashbaord references the Header element*/}
    </>
  );
};

export default Header;