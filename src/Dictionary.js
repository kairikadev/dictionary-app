import React, {useState} from "react";
import Results from "./Results";
import "./Dictionary.css";
import { GiMagnifyingGlass } from 'react-icons/gi';
import axios from "axios";


export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        console.log(response.data);
        setResults(response.data[0]);
    }

    function search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = `563492ad6f917000010000011069b06c748a4dee843ca49fe911797e`;
    }

    function handleSubmit(event){
        event.preventDefault();
       

        search();
    }

    function handleKeyword(event){
        setKeyword(event.target.value);
    }
    function load(){
        setLoaded(true);
        search();
    }

    if(loaded){
        return(
            <div className="dictionary">
                <section>
               <form onSubmit={handleSubmit} className="mt-3">
               <input type="search" placeholder="Search..." onChange={handleKeyword} classNames="search-field" defaultValue={props.defaultWord}/>
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
    } else {
        load();
        
    }
    
}