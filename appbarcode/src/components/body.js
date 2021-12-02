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
            <h1>Body</h1> 
            <BarcodeForm cards={this.props.cards} serial = { this.props.serial } mac={ this.props.mac } desc={this.props.desc} />
            <BarcodeCardList cards={this.props.cards}/>              

        </div>

        )
    }    

} //Body


export default Body;