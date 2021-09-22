import React from "react";

export default function Phonetics(props){
    return(
        <div className="Phonetics">
            /{props.phonetic.text}/
            <br />
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
        </div>
    )
}