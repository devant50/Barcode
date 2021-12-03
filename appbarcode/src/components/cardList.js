import NavItem from "@restart/ui/esm/NavItem";
import react from "react";
import BarcodeCard from "./card";
import { Table } from 'react-bootstrap';

class BarcodeCardList extends react.Component{
    constructor(props){
        super(props);
    }

    // incrementer(){
    //    let counter= this.props.counter[0];
    //    const setCounter = this.props.counter[1];
       
    //    console.log(counter);
    //    setCounter(counter);

    // }
  


    render(){
        return(
            <div>
                <h2>Barcode Card List</h2>
                <Table variant="dark" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Serial</th>
                            <th>Mac</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.cards[0].map((card, index ) =>{
                        return(
                            <tr style={{}}>
                                <BarcodeCard 
                                    counter={index+1} 
                                    key={index}  
                                    mac={card.mac} 
                                    serial={card.serial} 
                                    desc={card.desc}
                                />
                            </tr>
                        
                        )
                        }).reverse() }
                        
                    </tbody>

                </Table>
            </div>
        )
    }
}

export default BarcodeCardList;