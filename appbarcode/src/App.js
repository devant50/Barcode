// import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/body.js';
import { useState } from 'react';

function App() {
  const [mac, setMac] = useState('');
  const [serial, setSerial] = useState('');
  const [description, setDescription] = useState('')
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
