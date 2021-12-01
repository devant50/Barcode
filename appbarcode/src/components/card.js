import react from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import barcode_p from './resources/barcode_placeholder.png';

class BarcodeCard extends react.Component{


    render(){
        return(
            <div>
                <h3>barcodeCard</h3>
                <Card >
                    <Card.Img style={{width: "12rem"}} variant="top" src={barcode_p} />
                    <Card.Body>
                    <ListGroup>
                        <ListGroupItem>SERIAL</ListGroupItem>
                        <ListGroupItem>MAC</ListGroupItem>
                    </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default BarcodeCard;