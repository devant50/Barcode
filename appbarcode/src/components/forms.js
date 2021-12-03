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
        // let num = 1;
        const currentArray = this.props.cards[0];
        const newElement = [{
            serial: this.props.serial[0],
            mac: this.props.mac[0],
            desc: this. props.desc[0],
            //id: num+1
        }]

        this.props.cards[1](currentArray.concat(newElement));
    }
    onPrint(){
        // console.log(this.props.status[1])
        this.props.status[1](!this.props.status[0])
        // console.warn(this.props.status[0]);

    }
    getHistory(){
        console.log(this.props.cards[0])
    }


    handleSubmit(e){
        e.preventDefault();
        this.toArray();
        // this.getHistory();
        console.log(e)
    }


    // validate(){
    //     // Check if the field is empty
    //     // if field is empty, alert empty field
    //     mac = this.props.mac[0];
    //     serial = this.props.serial[0];
    //     desc = this.props.desc[0];

    //     serial.length === 0 ? alert('Serial Empty'); 
    // }

    

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                {
                    
                    !this.props.status[0] ? (          
                    <Row>
                        <Col>
                        <Form.Control size="lg" value={this.props.serial[0]} onChange={(e)=>{this.handleSerialChange(e)}} title='serial' placeholder="SERIAL" />
                        </Col>
                        <Col>
                        <Form.Control size="lg" value={this.props.mac[0]} onChange={(e)=>{this.handleMacChange(e)}} title='mac'placeholder="MAC_ADDRESS" />
                        </Col>
                        <Col>
                        <Form.Control size="lg" value={this.props.desc[0]} onChange={(e)=>{this.handleDescChange(e)}} title='desc' placeholder="DESCRIPTION" />
                        </Col>
                    </Row> ): null
                    
                }
                <Row>
                    <div >
                        <Button type="submit">Submit</Button>
                        <Button onClick={()=>{this.onPrint()}}>Print</Button>
                    </div>

                </Row>
                </Form>
            </div>
        )
    }
}

export default BarcodeForm;