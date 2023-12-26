import './App.css';
import Terms from './pages/terms.js';
import Login from './pages/login.js';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {

    return (
      <div className="App">
      <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/terms" element = {<Terms />} />
        </Routes>
        <Routes>
          <Route exact path="/" element = {<Login />} />
        </Routes>
      </div>
      </BrowserRouter>

      </div>
    );
}

  export default App;
    // <div>
    //   <center> <ImgDisplay /> </center>
    // </div>
// function Upload() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Upload
//         </p>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

