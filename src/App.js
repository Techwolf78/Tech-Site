import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Message from "./Message";
import Contact from "./Contact";
import NavBar from "./NavBar";

function App() {
  return (
    <div>

    <div>
      <NavBar/>
    </div>

    <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/message" element={<Message/>}/>
      <Route exact path="/contact" element={<Contact/>}/>

    </Routes>

    </div>
  );
}

export default App;
//app.js