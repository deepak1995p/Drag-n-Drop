import React from 'react';
import './App.css';
import Board from './components/Board';


function App() {
  return (
    <div className="App container">

      <h1 style={{color:"#fff", margin:"25px"}}>Drag and Drop the Images to Replace</h1>
      <main className="flexbox">
        <Board id="board-1" className="board">

        </Board>
      </main>
    </div>
  );
}

export default App;
