import React, {useState} from "react";
import Results from "./Results";
import "./Dictionary.css";
import { GiMagnifyingGlass } from 'react-icons/gi';
import axios from "axios";


export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        console.log(response.data);
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
       

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeyword(event){
        setKeyword(event.target.value);

    }
    return(
        <div className="dictionary">
            <section>
           <form onSubmit={search} className="mt-3">
           <input type="search" placeholder="Search..." onChange={handleKeyword} classNames="search-field" autoFocus="off"/>
        <button type="submit" className="search-button">
          <GiMagnifyingGlass />
        </button>
           </form>
           </section>
           <div className="hint">
               suggested words: sunset, wine, plants etc.....
           </div>
           <Results results={results} />
        </div>
      
    )
}