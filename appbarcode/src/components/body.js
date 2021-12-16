import React from 'react';
import reactdom from 'react-dom';
import BarcodeCardList from './cardList.js';
import BarcodeForm from './forms.js';
import OnPrint from './onprint.js';
import {Table} from 'react-bootstrap';
//import './scanner';




class Body extends React.Component {
    // constructor(props){
    //     super(props);

    // }
    
render(){
    return(

        <div className='container-fluid border' > 
            <h2>Entry</h2>
            <div id='console' className='row border mx-auto'>
                Logo
            </div>
            <div className="row">
                <div className="col-5 border mx-auto mb-2">
                    <BarcodeForm 
                        status ={this.props.status} 
                        cards={this.props.cards} 
                        serial = { this.props.serial } 
                        mac={ this.props.mac } 
                        desc={this.props.desc} 
                        icons={this.props.icons}
                    />
                </div>

                {/* Barcode List */}
                <div className="col border mx-2 ">
                    <BarcodeCardList 
                        // counter={this.props.counter} 
                        cards={this.props.cards}
                        icons={this.props.icons}
                    />
                </div>
                
            </div>

            <section  id='BCL'>
                <Table>
                    <tbody>
                        <tr>
                            <OnPrint cards={this.props.cards}/>
                        </tr>
                    </tbody>
                </Table>
            </section>
            
        </div>


        )
    }    

} //Body


export default Body;