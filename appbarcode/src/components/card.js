import react from 'react';
import { Table } from 'react-bootstrap';
// import { useBarcode } from 'react-barcodes';
import GenerateBarcode from './barcode.js';

class BarcodeCard extends react.Component{
    

    render(){
        return(
            <div>

                <div>
                    <Table >
                        <thead>
                            <th>Serial</th>
                            <th>Mac</th>
                            <th>Description</th>
                        </thead>
                        <tbody>
                            <tr style={{backgroundColor: '#fff', color: 'black'}}>
                                <td>
                                    <GenerateBarcode barcode = {this.props.serial}/>
                                </td>
                                <td>
                                    <GenerateBarcode barcode = {this.props.mac}/>
                                </td>
                                <td >
                                    {this.props.desc}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        )
    }
}

export default BarcodeCard;