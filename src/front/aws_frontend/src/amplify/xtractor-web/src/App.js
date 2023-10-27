import './App.css';
import ImgDisplay  from './images';
import {Login } from './ui-components';
import {Logo} from './ui-components';
import {NavBarHeader} from './ui-components';


function App () {
  return (
    <body>
    {/* <div style={{ position: 'absolute', left: '50%', top: '30%',transform: 'translate(-50%, -50%)'}}>
      <center>
        <Logo /> 
      </center>
    </div>
    <div style={{ position: 'absolute', left: '50%', top: '60%',transform: 'translate(-50%, -50%)'}}>
      <center>
        <Login /> 
      </center>
    </div>
    */
    <div>
      <center> <ImgDisplay /> </center>
    </div>
 } </body> 


  )
}
export default App;


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

