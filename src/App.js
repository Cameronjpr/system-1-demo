import React from 'react';
import { Toolbar } from './features/toolbar/Toolbar'
import { WindowController } from './features/window/WindowController'
import './App.css';

function App() {

  return (
    <div className="App" style={{overflow: 'hidden'}}>
      <Toolbar/>
      <WindowController/>
    </div>
  )
}

export default App;
