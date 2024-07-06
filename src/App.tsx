import React from "react";
import { Route, Routes } from "react-router-dom";
import GreetingPage from "./pages/GreetingPage";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GreetingPage />}></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
