import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AllRoutes from "./components/AllRoutes"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </ChakraProvider>
  );
};

export default App;