
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Boards from "./components/Boards";
import Cards from "./components/Cards";
import TaskList from "./components/TaskList/TaskList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";






const App = () => {


  return (
    <BrowserRouter>
      <div className="App">
        <Nav />


        <Routes>
          <Route path="/cards" element={<Cards />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/react-dnd" element={
            <DndProvider backend={HTML5Backend} >
              <TaskList />
            </DndProvider>
          }
          />



        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
