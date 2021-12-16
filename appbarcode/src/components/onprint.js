import react from 'react';
import { Tab } from 'react-bootstrap';
import GenerateBarcode from './barcode.js';



function OnPrint(props){
    const cards = props.cards[0];
    //console.log(cards)
    return(
        <div>
            {props.cards[0].map((card, index ) =>{
                // console.log(card.serial);
                    return(
                        < >
                            <td id="label">
                                <div className="label-container">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <GenerateBarcode barcode = {card.serial}/>
                                        </li>
                                        <li className="list-group-item">
                                            <GenerateBarcode barcode = {card.mac}/>

                                        </li>
                                        <li className="list-group-item">
                                            <small className="text-center">{card.desc}</small>

                                        </li>
                                    </ul>
                                </div>
                            </td>                                                  
                        </>
                    
                    )
                    }).reverse() }
        
        
        </div>
    )

}

export default OnPrint;