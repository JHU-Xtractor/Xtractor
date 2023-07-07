import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router> 
      <Route path="/" Component={LandingPage} />
      <Route path="/application" Component={ApplicationPage} />
    </Router>
  );
}

export default App;
