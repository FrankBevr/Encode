import React from 'react';
import Mint from './mint';
import ConnectButton from './connectButton';
import './base.css'
import './style.css'
// import Logo from 'logo.svg'
import Box from './box';

function App() {
  return (

    <main>
      {/* <div className="label">OA Records</div> */}
      <Box />
      <header className="App-header">

        <h1>The Holy Ink! Knight</h1>
        <h2>21 / 100 sold</h2>

        <p>Available in a limited edition</p>
        <p>Made by Simrat & Frank</p>
        <ConnectButton />
        <Mint />
      </header>
    </main>
  );
}

export default App;
