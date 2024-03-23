import React from "react";
import Card from "./Card";

const Details = ({details}) => {

    // creating an object that contains fields with info pulled from mock data
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul
        className="w-full h-full flex flex-col justify-between divide-y-1"
      >
        {/* looks like this accepts the above detailsList object and then maps each of items
        'item' fields */}
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
                {/* list items with have 2 'spans' for item name and item value such as 'name: "Name"'
                where span applies to a certain portion of text such as 'font-bold' which applies to 
                just the item value */}
              <span>{detailsList[item]}</span>
              <span className="font-bold">
                {/* if the item is market cap, apply function and make item of the result */}
                {item === "marketCapitalization" 
                  ? `${convertMillionToBillion(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;