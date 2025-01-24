import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LeadForm from './components/LeadForm';
import ScoreCalculation from './components/ScoreCalculation';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeadForm />} />
        <Route path="/score" element={<ScoreCalculation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;