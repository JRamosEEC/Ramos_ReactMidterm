import { useState } from 'react';
import NavBar from './components/NavBar';
import { Outlet } from "react-router-dom";
import background from './assets/background.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <NavBar />

      <div id="pageContent" className='pageContent'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
