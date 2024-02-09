import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route
import { TaskForm } from "./components/TaskForm";
import { Tasks } from "./context/TaskContext";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tasks><TaskForm /></Tasks>} />
      </Routes>
    </Router>
  );
};
