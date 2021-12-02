import react from 'react';
import { useBarcode } from 'react-barcodes';
import { Card } from 'react-bootstrap';

//import JsBarcode from 'jsbarcode';

// JsBarcode("water", "Wassup?");

function GenerateBarcode (props){
    const { inputRef } = useBarcode({
        value: props.barcode,
        options: {
          background: '#ffffff',
        }
    });

    return(
        <div>
            <img ref={inputRef} style={{width: "16rem"}} variant="top"/>
        </div>
    )
}

export default GenerateBarcode;