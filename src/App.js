import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

function App() {
  console.log(process.env);
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
