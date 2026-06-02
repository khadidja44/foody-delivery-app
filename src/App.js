import logo from './logo.svg';
import './App.css';
import Navs from './components/navs/navs'
import Home from './components/Home'
import { Fragment } from 'react';


function App() {
  return (
    <div className="App">
      <Fragment>
      <Navs/>
      <Home/>
     

      </Fragment>
      
    </div>
  );
}

export default App;
