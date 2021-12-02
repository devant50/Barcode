import react from 'react';
import { useBarcode } from 'react-barcodes';
// import { Card } from 'react-bootstrap';

//import JsBarcode from 'jsbarcode';

// JsBarcode("water", "Wassup?");

function GenerateBarcode (props){
    const { inputRef } = useBarcode({
        value: props.barcode,
        options: {
          background: '#ffffff',
          height: 50,
          margin: 20
        }
    });

    return(
        <div>
            <img ref={inputRef}/>
        </div>
    )
}

export default GenerateBarcode;