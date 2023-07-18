import React from "react";
import { useState } from "react";

export default function About() {

    const [mystyle , Setmystyle] = useState({
      color : 'white' ,
      backgroundColor : 'grey' , 
      border : '2px solid white'
    })

    const [btntext , Setbtntext] = useState("Enable Dark Mode") ;

    const Changebuttontext = ()=>{
      Setbtntext("Enable Light mode");
    }

    const changeDesign = ()=>{

      if (mystyle.color == 'white'){
        Setmystyle({
          color : 'black' ,
          backgroundColor : 'white'
        })
      }
      else if  (mystyle.color == 'black'){
        Setmystyle({
          color : 'white' ,
          backgroundColor : 'grey'
        })
      }
  }

  
    const darkMode = ()=>{
        Changebuttontext();changeDesign();

        let a = document.getElementById("collapseOne");
        let b = document.getElementById("collapseTwo");
        let c = document.getElementById("collapseThree"  );
        const all = document.getElementsByClassName("col");
        
        a.classList.toggle("bg-dark");a.classList.toggle("text-white");
        b.classList.toggle("bg-dark");b.classList.toggle("text-white");
        c.classList.toggle("bg-dark");c.classList.toggle("text-white");

        for (let i=0 ; i<3 ; i++){
            all[i].classList.toggle("bg-dark");
            all[i].classList.toggle("text-white");
        }

        
    }

    


    
  return (
    <>
      <div className="container my-5 "  style={mystyle} >
        <h1>About Us</h1>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button col"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion 1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show "
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed col"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion 2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed col"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion 3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse "
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-primary my-3" onClick={darkMode}>{btntext}</button>
      </div>
    </>
  );
}
