import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Dashboard";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
