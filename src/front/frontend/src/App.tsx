import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import ApplicationLayout from './components/ApplicationLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" Component={LandingPage} />
        <Route path="/xtractor/*" Component={ApplicationLayout} />ut
      </Routes>
    </BrowserRouter>
  );
}

export default App;
