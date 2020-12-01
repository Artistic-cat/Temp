import React, { useState} from "react";
import "./Search.css";

const Search = () => {
       
      const[state , setState] = useState(""); 
      const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setState(data);

      }

    return (
        <>
        <div className = "searchbar">
          <input type = "text" 
          placeholder = "Search keyword" 
          value = {state}
          onChange = {inputEvent} style = {{width : '50%' , height : '5vh'}}
          />
        </div>
        </>
    );
}

export default Search;