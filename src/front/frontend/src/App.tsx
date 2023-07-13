import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ApplicationLayout from './components/ApplicationLayout';
import SignIn from './components/SignIn';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  const [user, setUser] = useState<null | object>(null)
  const [isHuman, setIsHuman] = useState<boolean>(false)
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<SignIn setUser={setUser} user={user} setIsHuman={setIsHuman}/>} />
        <Route element={<ProtectedRoute isAllowed={isHuman ? true : false} redirectPath="/"/>} >
          <Route path="/xtractor" element={<ApplicationLayout setUser={setUser} user={user}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
