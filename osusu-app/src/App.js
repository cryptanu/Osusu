import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Join from './pages/join';
import Contributors from './pages/contributors';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/join' element={<Join/>} />
        <Route path='/contributors' element={<Contributors/>} />
    </Routes>
    </Router>
);
}
  
export default App;