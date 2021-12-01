import Button from "@restart/ui/esm/Button";
import react from "react";
import { Form, Row, Col } from 'react-bootstrap';


class BarcodeForm extends react.Component{


    render(){
        return(
            <div>
                <Form>
                <Row>
                    <Col>
                    <Form.Control placeholder="SERIAL" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="MAC_ADDRESS" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="DESCRIPTION" />
                    </Col>
                </Row>
                <Row>
                    <Button>Submit</Button>
                </Row>
                </Form>
            </div>
        )
    }
}

export default BarcodeForm;