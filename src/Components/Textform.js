import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Textform(props) {
  const [text , setText] = useState("Enter your text");
  const [len, setLen] = useState("?");
  const [wor, setWor] = useState("?");

  const handleChange = (event)=>{
    // console.log("Change is handled");
    setText(event.target.value);
    
  }

  const upClick = () =>{
    const up = text.toUpperCase() ;
    setText(up);
    props.alrt( "Success" ,"Converted to uppercase !" );
  }

  const lowClick = () =>{
    const up = text.toLowerCase() ;
    setText(up);
    props.alrt( "Success" ,"Converted to Lowercase !" );
  }

  const clearClick = () =>{
    const up = "" ;
    setText(up);
    props.alrt( "Success" ,"Cleared all !" );
  }

  const wordCount = () =>{
    const t = text.split(" ");
    const l = t.length;
    setWor(l);
  }

  const lengthClick = () =>{
    // const up = toString(text) ; 
    const ln = text.length ;
    setLen(ln);
    wordCount();
    console.log(ln);
  }

  const countVowel = () =>{
    const up = text ;
    let cnt = 0 ; 
    // console.log(up); 
    for (let i=0 ; i<up.length ; i++){
        if (up[i] === "a" || up[i] === 'e' || up[i] === 'i' || up[i] === 'o' || up[i] === 'u' ){
          cnt++;
        }
    }
    console.log("The no of vowels = " , cnt);

  

}

  const changeboxClick = ()=>{
    const ele = document.getElementById("box") ;
    ele.classList.toggle("bg-dark");
    ele.classList.toggle("text-white");
    props.alrt("Success" , "Color is changed ")
  }

  const handleCopy = ()=>{
    alert("Your text is copied !");
    const cpy = document.getElementById("box");
    cpy.select();
    navigator.clipboard.writeText(cpy.value) ;
    props.alrt( "Success" ,"Text is copied !" );
    // navigator.clipboard.readText(cpy.value);
  }


  

  return (
    <>
    {/* <Outlet/> */}
      <div className="container my-5 ">
        <h2> {props.heading} </h2>
        <button className="btn btn-primary m-2 "  onClick={changeboxClick}> Change box color </button>
        <div className="input-group rows-10">
          
          <textarea
            id = "box"
            className="form-control"
            aria-label="With textarea"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2"  onClick={upClick}> Convert to Uppercase </button>
        <button className="btn btn-primary m-2 "  onClick={lowClick}> Convert to Lowercase </button>
        <button className="btn btn-primary m-2 "  onClick={clearClick}> Clear all </button>
        <button className="btn btn-primary m-2 "  onClick={lengthClick}> Measure length </button>
        <button className="btn btn-primary m-2 "  onClick={countVowel}> vowel count </button>
        <button className="btn btn-primary m-2 "  onClick={handleCopy}> Copy text </button>
        <hr /> <hr />
        <div className="sumary container" >
          <h2>Text Summary</h2>
          <p>
            The given text contain {len} character and {wor} words .
          </p>
        </div>

        <hr />

        <div className="container">
          <h2>Text Preview</h2>
          <p>
             {text.length>0?text:"Enter something to preview"}
          </p> 
        </div>

        
      </div>
    </>
  );
}
