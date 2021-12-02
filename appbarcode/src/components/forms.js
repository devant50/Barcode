import Button from "@restart/ui/esm/Button";
import react from "react";
import { Form, Row, Col } from 'react-bootstrap';


class BarcodeForm extends react.Component{
    constructor(props){
        super(props);
        //console.log("BarcodeForm "+props.serial[0])

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.addNewItem = this.addNewItem.bind(this);

    }

    handleSerialChange(e){
        this.props.serial[1](e.target.value);
    }

    handleMacChange(e){
        this.props.mac[1](e.target.value);
    }
    handleDescChange(e){
        this.props.desc[1](e.target.value);
    }
    toArray(){
        // var
        const currentArray = this.props.cards[0];
        const newElement = [{
            serial: this.props.serial[0],
            mac: this.props.mac[0],
            desc: this. props.desc[0]
        }]

        this.props.cards[1](currentArray.concat(newElement));
    }

    getHistory(){
        console.log(this.props.cards[0])
    }


    handleSubmit(e){
        e.preventDefault();
        //this.toArray();
        this.getHistory();
    }

    

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                    <Form.Control value={this.props.serial[0]} onChange={(e)=>{this.handleSerialChange(e)}} title='serial' placeholder="SERIAL" />
                    </Col>
                    <Col>
                    <Form.Control value={this.props.mac[0]} onChange={(e)=>{this.handleMacChange(e)}} title='mac'placeholder="MAC_ADDRESS" />
                    </Col>
                    <Col>
                    <Form.Control value={this.props.desc[0]} onChange={(e)=>{this.handleDescChange(e)}} title='desc' placeholder="DESCRIPTION" />
                    </Col>
                </Row>
                <Row>
                    <Button onClick={()=>{this.toArray()}} type="submit">Submit</Button>
                </Row>
                </Form>
            </div>
        )
    }
}

export default BarcodeForm;