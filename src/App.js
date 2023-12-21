import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PatientRecords from './components/PatientRecords';
import Appointments from './components/Appointments';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/patient-records" element={<PatientRecords />} />
                <Route path="/appointments" element={<Appointments />} />
            </Routes>
        </Router>
    );
}

export default App;
