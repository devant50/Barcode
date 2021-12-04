// import Button from "@restart/ui/esm/Button";
import react from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';


class BarcodeForm extends react.Component{
    constructor(props){
        super(props);
        //console.log("BarcodeForm "+props.serial[0])

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.addNewItem = this.addNewItem.bind(this);

    }

    // componentDidMount(){
    //     const currentArray = this.props.cards[0];
    //     const newElement = [{
    //         serial: 'ABC123SERIAL',
    //         mac: 'AA:BB:CC:03:02:01',
    //         desc: '6920 Phone',
    //         //id: num+1
    //     }]

    //     this.props.cards[1](currentArray.concat(newElement));

    // }

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
        //this.props.status[1](!this.props.status[0])

        let divContents = document.getElementById("BCL").innerHTML;
        let a = window.open('', '', 'height=500, width=500');
        a.document.write('<html>');
        //a.document.write('<body > <h1>Div contents are <br>');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
        



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

    


    validate(e){
        // Check if the field is empty
        // if field is empty, alert empty field
        console.log(e)
 
    }

    

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                {
            //(true/false)? [return true] : [return false]
            //When use clicks print, the form is hidden.
                    !this.props.status[0] ? (          
                    <Col>
                        <Row>
                            <div className='mb-1'>
                            <Form.Control
                                id="serial" 
                                size="md" 
                                value={this.props.serial[0]} 
                                onChange={(e)=>{this.handleSerialChange(e)}} 
                                title='serial' 
                                placeholder="SERIAL" />
                            </div>
                        </Row>
                        <Row>
                            <div className='mb-1'>
                            <Form.Control 
                                size="md" 
                                value={this.props.mac[0]} 
                                onChange={(e)=>{this.handleMacChange(e)}} 
                                title='mac'
                                placeholder="MAC_ADDRESS" />
                            </div>
                        </Row>
                        <Row>
                            <div className='mb-1'>
                            <Form.Control 
                                size="md" 
                                value={this.props.desc[0]} 
                                onChange={(e)=>{this.handleDescChange(e)}} 
                                title='desc' 
                                placeholder="DESCRIPTION" />
                            </div>
                        </Row>
                    </Col> ): null
                    
                }
                <Row>

                    <div class="d-grid gap-2 d-md-block">
                        <Button class="btn btn-primary" type="submit">Submit</Button>
                        <Button class="btn btn-primary my-2" onClick={()=>{this.onPrint()}}>Print</Button>
                    </div>
                </Row>
                </Form>
            </div>
        )
    }
}

export default BarcodeForm;