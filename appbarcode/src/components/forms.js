import Button from "@restart/ui/esm/Button";
import react from "react";
import { Form, Row, Col } from 'react-bootstrap';


class BarcodeForm extends react.Component{
    constructor(props){
        super(props);
        //console.log("BarcodeForm "+props.serial[0])

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.toArray = this.toArray.bind(this);

       

    }

    handleSerialChange(e){
        //console.log(e.target.value);
        // console.log(e.target);
        this.props.serial[1](e.target.value);
        console.log("Handle Serial Change: "+this.props.serial[0]);
    }

    handleMacChange(e){
        this.props.mac[1](e.target.value);
        console.log("Handle Mac Change: "+this.props.mac[0]);
    }
    handleDescChange(e){
        this.props.desc[1](e.target.value);
        console.log("Handle Desc Change: "+this.props.desc[0]);
    }
    toAdd(){
        this.props.record[1]([...this.props.record[0], 
            {
                mac: this.props.mac[0],
                serial: this.props.serial[0],
                desc: this.props.desc[0]
              }
        ])
        console.log("Submitted "+ this.props.record[0][1]);

        
    }

    handleSubmit(e){
        e.preventDefault();
        this.toAdd();
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
                    <Button type="submit">Submit</Button>
                </Row>
                </Form>
            </div>
        )
    }
}

export default BarcodeForm;