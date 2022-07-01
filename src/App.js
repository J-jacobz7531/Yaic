import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import { HomeMiddle } from "./pages";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="mb-4" />
        <HomeMiddle />
        <div className="mb-60 sm:mb-8" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
