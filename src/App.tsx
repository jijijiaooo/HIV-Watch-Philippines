import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import ClinicMap from './pages/ClinicMap';
import FAQ from './pages/FAQ';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const MainContent = styled.main`
  padding-top: 80px;
  min-height: calc(100vh - 80px);
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navigation />
        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<ClinicMap />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App; 