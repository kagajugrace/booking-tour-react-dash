import logo from './logo.png';
import './App.css';
import Home from './views/home';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes  from './routes';


function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className="test">
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    //   <Home/>
    // </div>



    
    <Router>
      
      <Routes></Routes>
    </Router>
  );
}

export default App;
