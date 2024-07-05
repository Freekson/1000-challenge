import React from "react";
import { Route, Routes } from "react-router-dom";
import GreetingPage from "./pages/GreetingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GreetingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
