import './App.css';
import Terms from './pages/terms.js';
import Login from './pages/login.js';
import Upload from './pages/upload.js';
import Select from './pages/selectImages.js';
import Results from './pages/results.js';
import PasswordReset from './pages/passwordReset.js';
import SignUpPage from './pages/signup.js' 
import NotFoundPage from './pages/notfound.js';
import Dashboard from './pages/dashboard.js';
import Files from './pages/files.js';
import Settings from './pages/settings.js';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {

    return (
      <div className="App">
      <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/terms" element = {<Terms />} />
          <Route exact path="/uploads" element = {<Upload />} />
          <Route exact path="/login" element = {<Login />} />
          <Route exact path="/selectPages" element = {<Select />} />
          <Route exact path="/results" element = {<Results />} />
          <Route exact path="/" element = {<Login />} />
          <Route exact path="/passwordReset" element = {<PasswordReset />} />
          <Route exact path="/signup" element = {<SignUpPage />} />
          <Route exact path="/dashboard/:username" element = {<Dashboard />} />
          <Route exact path="/pageNotfound" element = {<NotFoundPage />} />
          <Route exact path="/files/:username" element = {<Files />} />
          <Route exact path="/settings/:username" element = {<Settings />} />
          <Route path="*" element = {<NotFoundPage />} />
        </Routes>

      </div>
      </BrowserRouter>

      </div>
    );
}

  export default App;
