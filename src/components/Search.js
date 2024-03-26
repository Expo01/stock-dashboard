import React, { useContext, useState } from "react"; //ALWAYS ALLOW AUTO-COMPLETE FOR ITEMS THAT SHOULD BE IMPORTED, IF 
// DIRECTLY TYPED, IT WILL NOT AUTO-IMPORT AND YOU'LL HAVE TO GO FIND THE ISSUE LATER
// import { mockSearchResults } from "../constants/mock"; // mockSearchResults object which we
// // created as mock.js contains an array of objects
import { SearchIcon, XIcon } from "@heroicons/react/solid"; 
import SearchResults from "./SearchResults";
import ThemeContext from "../context/ThemeContext";
import { searchSymbols } from "../api/stock-api";



const Search = () => { 
    const [input,setInput] = useState(""); // will track user query of stocks
    // const [bestMatches, setBestMatches] =useState(mockSearchResults.result); // returned content of query
    const [bestMatches, setBestMatches] =useState([]); // live data with empty array
    const{darkMode} = useContext(ThemeContext);

   const updateBestMatches = async() => {
    // setBestMatches(mockSearchResults.result); // placeholder. later will use fetch API
    // to get info from finhub API
      try{
        if (input){
          const searchResults = await searchSymbols(input);  // await keyword requries async
          const result = searchResults.result; // actual array
          setBestMatches(result);
        }
      } catch(error){
          setBestMatches([])
          console.log(error);
      }
    };

    const clear = () => { 
        setInput(""); // set default blank for query
        setBestMatches([]); // set default blank array for query result
    };

  return( // also below makes search bar dark mode toggle
  <div className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
    darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
    }`}
    >
    <input
        type = "text"
        value = {input}
        className={`w-full px-4 py-2 focus outline:none rounded-md ${
            darkMode ? "bg-gray-900" : null
        }`}
        placeholder="Search stock..."
        onChange={(event) =>{ // whenever input changes, update
            setInput(event.target.value);
        }}
        onKeyPress={(event) =>{ //onKeyPress is depracated (old) and should be replaced. but do i have to?
            if (event.key === "Enter"){ 
                updateBestMatches();
            }
        }}
    />

{/* x icon appears when something typed in search bar */}
    {input && (
    <button onClick={clear} className="m-1">
         <XIcon className="h-4 w-4 fill-gray-500" /> 
    </button>
    )}

{/* search icon visible in the search bar */}
    <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
    >
        <SearchIcon className="h-4 w-4 fill-gray-100" />
      </button>
    {input && bestMatches.length > 0? <SearchResults results={bestMatches}/> : null}
    {/* states that if there is input, and the input actually has a length, then pass in 'bestMatches'
    as the value of results to be used in the SearchResults component/function, as 
    indicated by the SearchResults react element tag */}
  </div>
  );
};


export default Search;