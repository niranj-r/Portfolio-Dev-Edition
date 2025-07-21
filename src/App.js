import React from 'react';
import Terminal from './components/Terminal';
import './App.css'; // Optional: if you're splitting styles

const App = () => (
  <div className="app">
    <div className="container">
      <div className="terminal-section">
        <Terminal />
      </div>
    </div>
  </div>
);

export default App;
