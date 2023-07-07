import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import ApplicationPage from './components/ApplicationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" Component={LandingPage} />
        <Route path="/application" Component={ApplicationPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
