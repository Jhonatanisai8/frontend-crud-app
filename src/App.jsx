import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./layout/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  );
}

export default App;
