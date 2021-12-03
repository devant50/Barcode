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
        <div>
            <h1>Barcode Label App</h1> 
            

            <BarcodeForm 
                status ={this.props.status} 
                cards={this.props.cards} 
                serial = { this.props.serial } 
                mac={ this.props.mac } 
                desc={this.props.desc} 
            /> 
            <BarcodeCardList 
                // counter={this.props.counter} 
                cards={this.props.cards}
            />              

        </div>

        )
    }    

} //Body


export default Body;