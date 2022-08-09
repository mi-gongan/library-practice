import TodoList from "./pages/TodoList";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Start from "./pages/Start";
import ReactQuery from "./pages/ReactQuery";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Start/>}/>
        <Route path="/recoil" element={<TodoList/>}/>
        <Route path="/react-query" element={<ReactQuery/>}/>
        <Route path="/pokemon" element={<Pokemon/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
