import NavItem from "@restart/ui/esm/NavItem";
import react from "react";
import BarcodeCard from "./card";

class BarcodeCardList extends react.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h4>Barcode Card List</h4>
                {this.props.cards[0].map((card) =>{
                   return <BarcodeCard style={{ width: '18rem', marginTop: '50px' }} key={this.props.cards.key} mac={card.mac} serial={card.serial} desc={card.desc}/>

                })}
            </div>
        )
    }
}

export default BarcodeCardList;