import React, { useContext, useEffect, useState } from "react";
import { mockCompanyDetails } from "../constants/mock";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchQuote, fetchStockDetails } from "../api/stock-api";

/*
useEffect
- by using this Hook, you tell React that your component needs to do something after render
- example being if stock symbol has changed, then other stuff has to change too?
*/

const Dashboard = () => {

    const {darkMode} = useContext(ThemeContext);
    const {stockSymbol} = useContext(StockContext);

    // both of these initialized to empty obj
    const[stockDetails, setStockDetails] = useState({});
    const [quote, setQuote] = useState({});

    // will run every time stock symbol changes. this is because of useEffect which is a function that
    // is designed to run and re-render the page any time there is a change somewhere on the page
    // such that if the stock ticker changes in the search, all the data is now re-rendered for the
    // appropraite stock
    useEffect(() => {
      const updateStockDetails = async () => {
        try{
          const result = await fetchStockDetails(stockSymbol);
          setStockDetails(result);
        }
        catch(error){
            setStockDetails({});
            console.log(error);
        }
      };
      const updateStockOverview = async () => {
        try{
          const result = await fetchQuote(stockSymbol);
          setQuote(result);
        }
        catch(error){
            setQuote({});
            console.log(error);
        }
      };
      //stock details and stock overview will be updated each time a new stock symbol selected
      updateStockDetails(); // market cap, etc.
      updateStockOverview(); // open price, close price, etc. non-historical though. 
    }, [stockSymbol]);
    

  return (
    // define display for various screen sizes
    <div // darkens dashboard background and lightens the text for darkmode
        className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
           darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100" 
        }`}
    >
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">      
            {/* <Header name={mockCompanyDetails.name} />  */}
            <Header name={stockDetails.name} />
            {/* Header references the Header.js component */}
        </div>
        <div className="md:col-span-2 row-span-4">
            <Chart/>  {/* references Chart component*/}
        </div>
        <div> {/* hard coding parameters to be passed to Overview object-function in Overview.js
         which we will later repalce the hardcode with API info */}
            <Overview
                // symbol={mockCompanyDetails.ticker}
                // all this content now live info pulled form finhub. labels pc, d, etc based on finhub documentation
                symbol={stockSymbol}
                price={quote.pc}
                change={quote.d}
                changePercent={quote.dp}
                currency={stockDetails.currency}
            />
        </div>
        <div className="row-span-2 xl:row-span-3">
            {/* <Card>Details</Card>  no longer need this place holder*/}
            {/* <Details details={mockCompanyDetails}/> */}
            <Details details={stockDetails}/> 
            {/* object from mock.js gets passed as the 'details' parameter to be used
             in the Details function of details.js, the info will extacted into detailsList object
             made into a list that is encapsulated as a Card. that card will be returned, so no 
             local Card element needed now */}
        </div>
    </div>
       

     
  );
};

export default Dashboard;