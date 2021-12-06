// import Button from "@restart/ui/esm/Button";
import react from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";


class BarcodeForm extends react.Component{
    constructor(props){
        super(props);
        //console.log("BarcodeForm "+props.serial[0])

        this.handleSubmit = this.handleSubmit.bind(this);
      
    }

    handleSerialChange(e){
        if(e.target.value.length == 0){
                //Logs Missing Serial Number
            console.log("Error: Missing Serial")
                //Sets the value of the serial field to empty if less than 1 Characters 
            this.props.serial[1]('')

            //this.setState({serialValid: false});
                //disables the submit button 
            //this.submitDisabled();
            
        }else{
            this.props.serial[1](e.target.value);
            // this.setState({serialValid: true})
            // console.log('handleSerial');
            // console.log(this.state)

        }
    }

    handleMacChange(e){
        if(e.target.value.length < 1){
                //Logs Missing MAC Address
            console.log("Error: Missing MAC Address")
                //Sets the value of the MAC field to empty if less than 1 Characters 
            this.props.mac[1]('')
                //disables the submit button 
            //this.submitDisabled();
            // this.setState({macValid: false});
            
        }else{
                //if there is a value, sets Mac to entered value
            this.props.mac[1](e.target.value);
            this.setState({macValid: true});

            // console.log('handleMac');
            // console.log(this.state)
                //enable submit button
            //this.submitEnabled();
        }
    }

    handleDescChange(e){
        if(e.target.value.length == ''){
                //Logs Missing Description
            console.log("Error: Missing Description")
                //Sets the value of the description field to empty if less than 1 Characters 
            this.props.desc[1]('')
                //disables the submit button 
            //this.submitDisabled();
            // this.setState({descValid: false});
            
        }else{
                //if there is a value, set description to entered value
            this.props.desc[1](e.target.value);
            // this.setState({descValid: true});

            // console.log('handleDesc');
            // console.log(this.state)
                //enable submit button
            //this.submitEnabled();
        }
    }

    //clears out the feilds after submit
    clearFields(){
        this.props.serial[1]('');
        this.props.mac[1]('');
        this.props.desc[1]('');

        //invalidated the fields unless they are refilled
        this.setState({
            serialValid: false,
            macValid: false,
            descValid: false
        });
       
    }

    submitDisabled(){
        const submit = document.getElementById('submit');
        submit.disabled = true;
    }

    submitEnabled(){
        const submit = document.getElementById('submit');
        submit.disabled = false;
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

    handleSubmit(e){

        e.preventDefault();
            
        this.toArray();

        this.clearFields(); // clears form; invalidates all

    
    }

    render(){
        return(
            <div>
                <Form noValidate id='form' onSubmit={this.handleSubmit} >
                {
            //(true/false)? [return true] : [return false]
            //When use clicks print, the form is hidden.
                    !this.props.status[0] ? (          
                    <Col>
                        <Row>
                            <Form.Group className='mb-1'>
                                <Form.Control
                                    // isValid = {this.state.serialValid}
                                    required
                                    id="serial" 
                                    size="md" 
                                    value={this.props.serial[0]} 
                                    onChange={(e)=>{this.handleSerialChange(e)}} 
                                    title='serial' 
                                    placeholder="SERIAL" 
                                />
                                <Form.Control.Feedback >
                                    Looks good!
                                </Form.Control.Feedback>
                           
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className='mb-1'>
                                <Form.Control
                                    // isValid = {this.state.macValid}
                                    required
                                    id="mac"
                                    size="md" 
                                    value={this.props.mac[0]} 
                                    onChange={(e)=>{this.handleMacChange(e)}} 
                                    title='mac'
                                    placeholder="MAC_ADDRESS" 
                                />
                                <Form.Control.Feedback >
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className='mb-1'>
                                <Form.Control
                                    // isValid = {this.state.descValid} 
                                    required
                                    id="desc"
                                    size="md" 
                                    value={this.props.desc[0]} 
                                    onChange={(e)=>{this.handleDescChange(e)}} 
                                    title='desc' 
                                    placeholder="DESCRIPTION" 
                                />
                                <Form.Control.Feedback >
                                    Looks good!
                                </Form.Control.Feedback>

                            </Form.Group>
                        </Row>
                    </Col> ): null
                    
                }
                <Row>

                    <div className="d-grid gap-2 d-md-block">
                        <Button id="submit" className="btn btn-primary" type="submit">Submit</Button>
                        <Button className="btn btn-primary my-2" onClick={()=>{this.onPrint()}}>Print</Button>
                    </div>
                </Row>
                </Form>
            </div>
        )
    }
}

export default BarcodeForm;