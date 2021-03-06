// import { useState } from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import deleteButton from 'bootstrap-icons/icons/x-circle.svg';
import expandButton from 'bootstrap-icons/icons/zoom-in.svg';

// import './App.css';
import Body from './components/body.js';
import { useState } from 'react';

function App() {
  const [mac, setMac] = useState('AA:BB:CC:03:02:01');
  const [serial, setSerial] = useState('ABC123SERIAL');
  const [description, setDescription] = useState('6920 Phone')
  const [cardArray,appendCardArray] = useState([]);
  const [isReady, setReady] = useState(false);
  const icons = [deleteButton, expandButton];
  // const [counter, setCounter] = useState(0);

  return (
    <div className="App">

      <Body 
        cards={[cardArray, appendCardArray]} 
        serial = {[serial,setSerial]} 
        mac={[mac, setMac]} 
        desc={[description, setDescription]}
        status = {[isReady, setReady]} 
        icons = {icons}
        // counter ={[counter, setCounter]}
        />

      
    </div>
  );
}

export default App;
