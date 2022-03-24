import { useContext } from "react";
import "./App.css";
import Hero from "./app/components/Hero";
import Timer from "./app/components/Timer";

function App() {
  useContext(() => {
    console.log("AppEvent Raised.");
  }, []);
  return (
    <div className="App">
      <Hero />
      <Timer />
    </div>
  );
}

export default App;
