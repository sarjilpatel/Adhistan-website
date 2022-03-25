import { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./app/components/Footer/footer";
import Header from "./app/components/Header/Header";
import Home from "./app/components/Home/home";

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
