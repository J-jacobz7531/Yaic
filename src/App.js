import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import { HomeMiddle } from "./pages";

function App() {
  return (
    <Router>
      <div  >
        <Header />
        <HomeMiddle />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
