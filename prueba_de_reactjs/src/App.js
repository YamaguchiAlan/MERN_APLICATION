import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
        <Nav/>
      </header>
    </div>
  );
}

export default App;
