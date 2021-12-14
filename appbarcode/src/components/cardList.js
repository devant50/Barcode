//import NavItem from "@restart/ui/esm/NavItem";
import react from "react";
import reactdom from "react-dom";
import BarcodeCard from "./card";
import { Table } from 'react-bootstrap';

class BarcodeCardList extends react.Component{
    // constructor(props){
    //     super(props);
    // }

    removeCard(){
        console.log('removeCard');
    }

    //this.removeCard();
    
    render(){
        return(
            <div id='BCL_'>
                
                <Table className="table table-hover table-sm table-striped">
                    <thead style={{textAlign: 'center'}}>
                        <tr>
                            <th>#</th>
                            <th>Serial</th>
                            <th>Mac</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody className='table-hover'>
                    {this.props.cards[0].map((card, index ) =>{
                        return(
                            < >
                                <tr id={'card-'+index}>
                                    <BarcodeCard 
                                        id={index}
                                        cards={this.props.cards}
                                        counter={index+1} 
                                        key={[index]}  
                                        mac={card.mac} 
                                        serial={card.serial} 
                                        desc={card.desc}
                                        icons={this.props.icons}

                                    />
                                </tr>
                            
                            </>
                        
                        )
                        }).reverse() }
                        {/* {console.log(this.props.cards[0])}                  } */}
                    </tbody>

                </Table>
            </div>
        )
    }
}

export default BarcodeCardList;