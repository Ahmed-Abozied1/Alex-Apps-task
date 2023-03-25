import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomePage/HomePage";
import NotFound from "./Screens/NotFoundPage/NotFound";
import LoginScreen from "./Screens/LoginPage/LoginPage";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginScreen />} />
      <Route exact path="/home" element={<HomeScreen />} />
      <Route exact path="/login" element={<LoginScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
