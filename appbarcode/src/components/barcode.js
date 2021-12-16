//import react from 'react';
import { useBarcode } from 'react-barcodes';
// import { Card } from 'react-bootstrap';

//import JsBarcode from 'jsbarcode';

// JsBarcode("water", "Wassup?");

function GenerateBarcode (props){
    const { inputRef } = useBarcode({
        value: props.barcode,
        options: {
          background: '#ffffff',
          height: 30,
        //   margin: 10
        }
    });

    return(
        <div>
            <img id="barcode_img" alt={props.serial} ref={inputRef} className='img-fluid rounded' />
        </div>
    )
}

export default GenerateBarcode;