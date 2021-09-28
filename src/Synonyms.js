import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    console.log (props.synonyms);
    if(props.synonyms){
        return(
            <div >
                <p>Synonyms</p>
            <ul className="Synonym"> 
        {props.synonyms.map(function(synonym, index){
            return(
                
                 <li key={index}>
                {synonym}
                </li>
               )
  
        })}
        </ul>
        </div>
        )
    }else{
        return null;
    }
    
}