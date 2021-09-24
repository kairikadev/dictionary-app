import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props){
    return(
        <div className="Meaning">
            <section>
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                        <div className="definiton">
                        {definition.definition}
                        </div>
                        <br />
                        <div className="example">
                        <em>{definition.example}</em>
                        </div>
                        <Synonyms synonyms={definition.synonyms} />
                        
                    </div>
                )
            })}
          </section>  
        
        </div>

    );
}