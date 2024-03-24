import React, {useContext, useState } from "react";
import { mockHistoricalData } from "../constants/mock";
import { convertUnixTimestampToDate} from "../helpers/date-helpers";
import Card from "./Card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartConfig } from "../constants/config";
import ChartFilter from "./ChartFilter";
import ThemeContext from "../context/ThemeContext";


const Chart = () => {
    // use state is a react Hook that is responsible for managing local state of data
    // the syntax with [data,setData] is that useState returns the current state and a 
    // function that updates the state. useState(stuff) accepts initial data
  const [data, setData] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");

  const {darkMode} = useContext(ThemeContext);

//   must pass data in way that recharts understands
const formatData = () => {
    // you can see that 'c' in mock data is an array of numbers. mapping array of objects
    // so each has a value and a date
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2), // specify 2 decimal places
        date: convertUnixTimestampToDate(data.t[index]), // 't' is array of time stamps
      };
    });
  };

  return (
    <Card>
    <ul className="flex absolute top-2 right-2 z-40">
        {/* keys are chart filters 'day, week, etc.' 
        this will reference above const for setFilter which is initialized to 1 week */}
        {Object.keys(chartConfig).map((item) => { // chartCongfig is the const in config.js with the filter fields
        // where this will map each 'item' from the fields
        return(
            <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li> // not letting me return the li. dunno why 
        ) 
    })}
      </ul>

      <ResponsiveContainer> {/* component that makes chart adapt to size of parent container */}

        {/* SVG elemetns can be added into areaChart component. SVG element is a container that defines a new coordinate system */}
        <AreaChart data={formatData(data)}>

        {/* linearGradient is a SVG that makes colors look pretty, going from light/transluscent
        to more dark/opaque */}
        <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e91" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop 
              offset="95%" 
              stopColor={darkMode ? "#312e91" : "rgb(199 210 254)"} // modify linear grad 
              stopOpacity={0} />
            </linearGradient>
          </defs>

        <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#chartColor)"
          />

          {/* tooltip will show price on chart when hovered over. With mock data, only shows
          3 price points on a smoothed line, but fibhub api will increase datapoints */}
          <Tooltip 
          contentStyle={darkMode ? {backgroundColor: "#111827"} : null}
          itemStyle={darkMode ? {color: "#818cf8"}: null}
          /> 
          {/* return object of bg color if darkmode for tool tip */}
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>

      </ResponsiveContainer>
    </Card>
  );


};
 
export default Chart;




