import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
// import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </>
    </Router>
  );
}

export default App;
