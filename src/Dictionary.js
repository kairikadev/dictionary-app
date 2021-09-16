import React, {useState} from "react";
import "./Dictionary.css";
import { GiMagnifyingGlass } from 'react-icons/gi';
import axios from "axios";


export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function handleResponse(response){
        console.log(response.data);
    }

    function search(event){
        event.preventDefault();
        alert(`Searching ${keyword}`);

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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