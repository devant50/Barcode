import react from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import barcode_p from './resources/barcode_placeholder.png';
import generateBarcode from './barcode.js';
class BarcodeCard extends react.Component{


    render(){
        return(
            <div>
                <h3>barcodeCard</h3>
                <Card >
                    <Card.Img style={{width: "12rem"}} variant="top" src={barcode_p} />
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