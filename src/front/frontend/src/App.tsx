import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ApplicationLayout from './components/ApplicationLayout';
import SignIn from './components/SignIn';

function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<SignIn setAuth={setAuth} isAuth={isAuth}/>} />
        <Route path="/xtractor" element={<ApplicationLayout setAuth={setAuth} isAuth={isAuth}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
