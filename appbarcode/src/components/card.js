import react from 'react';
import { Table } from 'react-bootstrap';
// import { useBarcode } from 'react-barcodes';
import GenerateBarcode from './barcode.js';

class BarcodeCard extends react.Component{
    

    render(){
        return(
            <>
                <td>
                    {this.props.counter}
                </td>
                <td>
                    <GenerateBarcode barcode = {this.props.serial}/>
                </td>
                <td>
                    <GenerateBarcode barcode = {this.props.mac}/>
                </td>
                <td >
                    {this.props.desc}
                </td>
            </>
        )
    }
}

export default BarcodeCard;