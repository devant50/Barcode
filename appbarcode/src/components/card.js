import react from 'react';
import CardOptions from './cardOptions';
//import { Table } from 'react-bootstrap';
// import { useBarcode } from 'react-barcodes';
import GenerateBarcode from './barcode.js';

class BarcodeCard extends react.Component{
    

    render(){
        return(
            <>
            {/* {console.log(this.props)} */}
                <td>
                    {this.props.counter}
                </td>
                <td>
                    <GenerateBarcode barcode = {this.props.serial}/>
                </td>
                <td>
                    <GenerateBarcode barcode = {this.props.mac}/>
                </td>

                 {/* Remove and description Icons */}
                <td >
                    <div >
                        <small>{this.props.desc}</small>
                    </div>
                </td>

                {/* Remove and Enlarge Icons */}
                <td >
                    <CardOptions id={this.props.id} cards={this.props.cards} icons={this.props.icons}/>
                </td>
            </>
        )
    }
}

export default BarcodeCard;