import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FelipApp from "./components/felipApp/FelipApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <FelipApp />
      </BrowserRouter>
    </>
  );
}

export default App;
