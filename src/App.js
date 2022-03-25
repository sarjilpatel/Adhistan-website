import { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./app/components/About/about";
import Footer from "./app/components/Footer/footer";
import Header from "./app/components/Header/Header";
import Hero from "./app/components/Hero";
import Home from "./app/components/Home/home";
import Timer from "./app/components/Timer";

function App() {
  useContext(() => {
    console.log("AppEvent Raised.");
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
