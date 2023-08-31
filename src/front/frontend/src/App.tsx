import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ApplicationLayout from './components/ApplicationLayout';
import SignIn from './components/SignIn';
import ProtectedRoute from './utils/ProtectedRoute';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState<null | object>(null)
  const [isHuman, setIsHuman] = useState<boolean>(false)
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<SignIn setUser={setUser} user={user} setIsHuman={setIsHuman}/>} />
        <Route element={<ProtectedRoute isAllowed={isHuman && user !== null ? true : false} redirectPath="/"/>} >
          <Route path="/xtractor" element={<ApplicationLayout setUser={setUser} user={user}/>} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={isHuman && user !== null ? true : false} redirectPath="/"/>} >
          <Route path="/userProfile" element={<Profile user={user} setUser={setUser}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
