import React from "react";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Header from "./header";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
