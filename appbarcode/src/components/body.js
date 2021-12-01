import React from 'react';
// import react from 'react'
// import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import BarcodeCardList from './cardList.js';
import BarcodeForm from './forms.js';




class Body extends React.Component {
    
render(){
    return(
        <div>
            <h1>Body</h1> 
            <BarcodeForm />
            <BarcodeCardList />              

        </div>

        )
    }    

} //Body


export default Body;