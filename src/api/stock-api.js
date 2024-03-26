
const basePath = "https://finnhub.io/api/v1"

/* finhub RESTful API: 
- API allows computer communication client and provider
- REST = representational state transfer
- is a loos set of rules for building web APIs
- organizes into URIs (unique resource identifiers)
- is stateless. 2 parties don't need to store info about the other and all requests are ind of others
   - leads to good scaling
- caching makes things fast

*/

//============================**************================================


//symbol lookup, finhub requries querry text and provides an example "/search?q=apple"
// where q means query
// query will be what user enters in search
// finhub returns display symbol
export const searchSymbols = async (query) => { 
    const url= `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`; 
// in env file, we imoprted the REACT_APP... from finhub
   const response = await fetch(url);

if(!response.ok){
    const message = `an error has occured: ${response.status}`;
    throw new Error(message);
}

return await response.json(); // parses response as json and produces JS object. JSON = JS object notation
};

//============================**************================================

// for getting details about a stock. finhub returns info like market cap, currency, ticker, etc.
export const fetchStockDetails = async(stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
};

//============================**************================================


//getting most recent price of a stock
// finhub returns real-time data for current, high, low, open, close, previous close, time stamp
export const fetchQuote = async(stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    // was missing semi-colons for 2 above lines. withouth them, no error showed and API gave me thousands of 
    // unordered results and then broke

    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
}


//============================**************================================

// candles and historyical data.. unfortunately not a premium finhub feature and is $$$$


export const fetchHistoricalData = async (
    stockSymbol,
    resolution,
    from,
    to
) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution${resolution}&from=${from}&to${to}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
};
