import react from "react";
import BarcodeCard from "./card";

class BarcodeCardList extends react.Component{


    render(){
        return(
            <div>
                <h4>BarcodeCardList</h4>
                <BarcodeCard />
            </div>
        )
    }
}

export default BarcodeCardList;