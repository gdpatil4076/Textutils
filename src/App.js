import "./App.css";
import Navbar from "../../my-project/src/Components/Navbar.js";
import Textform from "../../my-project/src/Components/Textform";
import About from "../src/Components/About";
import Alert from "../../my-project/src/Components/Alert";
import { useState } from "react";

// import {
//   BrowserRouter as Router,
//   RouterProvider,
//   Switch ,
//   Route,
//   Link,
// } from "react-router-dom" ;

import { BrowserRouter, Router ,  Routes, Route } from "react-router-dom";

function App() {
  // let name = "Gaurav Patil";

  const [mode, Setmode] = useState("light");

  const [alrt, Setalert] = useState(null);

  const [col, Setcol] = useState("grey");

  const ShowAlert = (type, messsage) => {
    Setalert({
      typ: type,
      msg: messsage,
    });

    setTimeout(() => {
      Setalert(null);
    }, 2000);
  };

  const Varymode = () => {
    if (mode == "light") {
      Setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      ShowAlert("success", "dark mode is enabled");
    } else {
      Setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      ShowAlert("success", "Light mode is enabled");
    }
  };

  const differentColor = (st) => {
    // console.log(st);
    if (st == "blue") {
      // Setcol("blue");
      document.body.style.backgroundColor = ` ${st} `;
      console.log("clicked");
    } else if (st == "red") {
      // Setcol("red");
      document.body.style.backgroundColor = ` ${st} `;
    } else if (st == "yellow") {
      // Setcol("yellow");
      document.body.style.backgroundColor = ` ${st} `;
    } else if (st == "pink") {
      // Setcol("pink");
      document.body.style.backgroundColor = ` ${st} `;
    }
  };
// gdfj
  return (
    <>
      <BrowserRouter>

        <Navbar
          title="TextAnalyser"
          aboutText="ABOUT"
          hom="HOME"
          mod={mode}
          vary={Varymode}
          colf={differentColor}
        />
        <Alert alert={alrt}  />

        <Routes>
          <Route exact path="/" element={<Textform heading= "Text Analyzer" alrt = {ShowAlert}  />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        
      </BrowserRouter>


      

  
      
    </>
  );
}

export default App;
