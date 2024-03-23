import React from "react";
import Card from "./Card";
import { mockCompanyDetails } from "../constants/mock";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";

const Dashboard = () => {

  return (
    // define display for various screen sizes
    <div className= "h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand bg-neutral-100">
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">      
            <Header name={mockCompanyDetails.name} /> 
            {/* Header references the Header.js component */}
        </div>
        <div className="md:col-span-2 row-span-4">
            <Card>Chart</Card>
        </div>
        <div> {/* hard coding parameters to be passed to Overview object-function in Overview.js
         which we will later repalce the hardcode with API info */}
            <Overview
                symbol={mockCompanyDetails.ticker}
                price={300}
                change={30}
                changePercent={10.0}
                currency={"USD"}
            />
        </div>
        <div className="row-span-2 xl:row-span-3">
            {/* <Card>Details</Card>  no longer need this place holder*/}
            <Details details={mockCompanyDetails}/>
            {/* object from mock.js gets passed as the 'details' parameter to be used
             in the Details function of details.js, the info will extacted into detailsList object
             made into a list that is encapsulated as a Card. that card will be returned, so no 
             local Card element needed now */}
        </div>
    </div>
       

     
  );
};

export default Dashboard;