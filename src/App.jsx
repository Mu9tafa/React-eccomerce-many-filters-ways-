// import React, { Component } from 'react';
import { Container } from "react-bootstrap";

import NavBar from "./components/Navbar";
import Filtered from "./components/Filtered";

const App = () => {
   return (
      <>
         <NavBar />
         <h1 className="text-center my-4">Our E-Commerce store</h1>
         <Container>
            <Filtered />
         </Container>
      </>
   );
};

export default App;
