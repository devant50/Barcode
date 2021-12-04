import React from 'react';
// import react from 'react'
// import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import BarcodeCardList from './cardList.js';
import BarcodeForm from './forms.js';




class Body extends React.Component {
    constructor(props){
        super(props);

    }
    
render(){
    return(
        // Core App
        // <div>
        //     <h1>Barcode Label App</h1> 
            

 
              

        // </div>
        <div className='container border' > 
            <h2>Entry</h2>
            <div className='row border mx-auto'>
                Logo
            </div>
            <div className="row">
                <div className="col-4 border mx-auto mb-2">
                    <BarcodeForm 
                        status ={this.props.status} 
                        cards={this.props.cards} 
                        serial = { this.props.serial } 
                        mac={ this.props.mac } 
                        desc={this.props.desc} 
                    />    
                </div>

                {/* Barcode List */}
                <div className="col border mx-2 ">
                    <BarcodeCardList 
                        // counter={this.props.counter} 
                        cards={this.props.cards}
                    />
                </div>
                
            </div>
            
        </div>

        )
    }    

} //Body


export default Body;