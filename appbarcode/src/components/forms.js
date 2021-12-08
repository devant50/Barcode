// import Button from "@restart/ui/esm/Button";
import react from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';


class BarcodeForm extends react.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        //error state
        this.state={
            serialError: {},
            macError: {}, 
            descError: {}
        }
    
    }

    handleSerialChange(e){
        this.props.serial[1](e.target.value);
        //console.log("Serial: "+this.props.serial[0]);  
        console.log("Serial: "+e.target.value);      
    }

    handleMacChange(e){
        this.props.mac[1](e.target.value);
        //console.log("MAC: "+this.props.desc[0]);
        console.log("MAC: "+e.target.value);      
       
    }

    handleDescChange(e){
        this.props.desc[1](e.target.value);
        // console.log("Desc: "+this.props.desc[0]);   
        console.log("Desc: "+e.target.value);      
    

        //console.log("Description: "+ this.props.desc[0]);
    }

    //clears out the feilds after submit
    clearFields(){
        this.props.serial[1]('');
        this.props.mac[1]('');
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
            desc: this.props.desc[0],
        }]

        this.props.cards[1](currentArray.concat(newElement));
    }

    onPrint(){
        //this.props.status[1](!this.props.status[0])
        // document.getElementById("cardButton").outerHTML='';
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
        //validation
        const isValid = this.formValidation(); //returns true or false
        
        //console.log(isValid);
        if(isValid){
            this.toArray();
        }
    }


    formValidation(){
        const serial = this.props.serial[0].trim();
        const mac = this.props.mac[0].trim();
        const desc = this.props.desc[0].trim();

        let serialErr = {};
        let macErr = {};
        let descErr = {};
        let isValid = true;

        if(serial.length === 0){
            serialErr.empty = 'Serial Number is empty!'
            isValid = false;
        }

        if(mac.length === 0){
            macErr.short = "MAC Address is empty!";
            isValid = false;
        }

        if(desc.length === 0){
            descErr.short = "Description is empty!";
            isValid = false;
        }

        // Sets determined error to form error this.state.
        this.setState({
            serialError: serialErr,
            macError: macErr,
            descError: descErr,
        })
        
        //boolean ture/ false if everything is good with entered data.
        return isValid;
    }

    render(){
        return(
            <div>
                <Form noValidate id='form' onSubmit={this.handleSubmit} >          
                    <Col>
                        <Row>
                            <Form.Group className='mb-1'>
                                <Form.Control
                                    // isValid = {this.state.serialValid}
                                    required
                                    id="serial" 
                                    size="md" 
                                    value={this.props.serial[0]} 
                                    onInput={(e)=>{this.handleSerialChange(e)}} 
                                    title='serial' 
                                    placeholder="SERIAL" 
                                />
                                        {/* //RETURNS ERROR, ONSCREEN  */}
                                    {Object.keys(this.state.serialError).map((key)=>{
                                        return (
                                            <>
                                                <small className='text-center' style={{color: 'red'}}>
                                                    {this.state.serialError[key]}
                                                </small>
                                                <br />
                                            </>
                                        )

                                    })}
                           
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
                                    {Object.keys(this.state.macError).map((key)=>{
                                        return (
                                            <small style={{color: 'red'}}>
                                                {this.state.macError[key]}
                                            </small>
                                        )

                                    })}
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
                                    {Object.keys(this.state.descError).map((key)=>{
                                        return (
                                            <small style={{color: 'red'}}>
                                                {this.state.descError[key]}
                                            </small>
                                        )

                                    })}

                            </Form.Group>
                            
                        </Row>
                        <Row>
                            <Form.Group>
                                <Form.Select aria-label="Default select example">
                                    <option>Model</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>                      
                                    
                            </Form.Group>
                        </Row>  
                        <br />

                        <Row>

                            <Form.Group>
                                <div className="d-grid gap-2 d-md-block">
                                    <Button id="submit" className="btn btn-primary" type="submit">Submit</Button>
                                    <Button className="btn btn-primary my-2" onClick={()=>{this.onPrint()}}>Print</Button>
                                </div>
                            </Form.Group>
                        </Row>

                    </Col>
                </Form>
            </div>
        )
    }
}

export default BarcodeForm;