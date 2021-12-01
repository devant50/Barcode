// import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/body.js';
import { useState } from 'react';

function App() {
  const [mac, setMac] = useState('');
  const [serial, setSerial] = useState('');
  const [description, setDescription] = useState('')

  //console.log("App "+ serial);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Body serial = {[serial,setSerial]} mac={[mac, setMac]} desc={[description, setDescription]}/>

      </header>
    </div>
  );
}

export default App;
