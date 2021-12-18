import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Providers } from './Providers';

function App() {
  return (
    <Providers>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://prettycoffee.github.io/startpage"
            target="_blank"
            rel="noopener noreferrer"
            >
            Read the docs
          </a>
        </header>
      </div>
    </Providers>
  );
}

export default App;
