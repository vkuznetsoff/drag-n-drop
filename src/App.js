
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Boards from "./components/Boards";
import Cards from "./components/Cards";





const App = () => {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        

        <Routes>
          <Route path="/cards" element={<Cards />} />
          <Route path="/boards" element={<Boards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
