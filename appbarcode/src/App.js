// import { useState } from 'react';
//import logo from './logo.svg';
import 'bootstrap-git/dist/css/bootstrap.css';

// import './App.css';
import Body from './components/body.js';
import { useState } from 'react';

function App() {
  const [mac, setMac] = useState('AA:BB:CC:03:02:01');
  const [serial, setSerial] = useState('ABC123SERIAL');
  const [description, setDescription] = useState('6920 Phone')
  const [cardArray,appendCardArray] = useState([]);
  const [isReady, setReady] = useState(false);
  // const [counter, setCounter] = useState(0);

  return (
    <div className="App">

      <Body 
        cards={[cardArray, appendCardArray]} 
        serial = {[serial,setSerial]} 
        mac={[mac, setMac]} 
        desc={[description, setDescription]}
        status = {[isReady, setReady]} 
        // counter ={[counter, setCounter]}
        />

      
    </div>
  );
}

export default App;
