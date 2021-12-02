import react from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { useBarcode } from 'react-barcodes';
import GenerateBarcode from './barcode.js';

class BarcodeCard extends react.Component{


    render(){
        return(
            <div>
                {/* <h3>barcodeCard</h3> */}
                <Card >
                    {/* {console.log(this.props.cards[0])} */}
                    <GenerateBarcode barcode = {this.props.serial}/>
                    <Card.Body>
                    <ListGroup>
                        <ListGroupItem>{this.props.serial}</ListGroupItem>
                        <ListGroupItem>{this.props.mac}</ListGroupItem>
                    </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default BarcodeCard;