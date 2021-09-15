import React, {useState} from "react";
import "./Dictionary.css";
import { GiMagnifyingGlass } from 'react-icons/gi';

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function search(event){
        event.preventDefault();
        alert(`Searching ${keyword}`);
    }
    function handleKeyword(event){
        setKeyword(event.target.value);

    }
    return(
        <div className="dictionary">
           <form onSubmit={search}>
           <input type="search" placeholder="Search" onChange={handleKeyword} classNames="search-field" />
        <button type="submit" className="search-button">
          <GiMagnifyingGlass />
        </button>
           </form>
        </div>
      
    )
}