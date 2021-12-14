import react from 'react';
import { Tab } from 'react-bootstrap';
import GenerateBarcode from './barcode.js';



function OnPrint(props){
    const cards = props.cards[0];
    //console.log(cards)
    return(
        <>
            {props.cards[0].map((card, index ) =>{
                // console.log(card.serial);
                    return(
                        < >
                            <div className="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <GenerateBarcode barcode = {card.serial}/>
                                    </li>
                                    <li class="list-group-item">
                                        <GenerateBarcode barcode = {card.mac}/>

                                    </li>
                                    <li class="list-group-item">
                                        <small className="text-center">{card.desc}</small>

                                    </li>
                                </ul>
                            </div>
                            <br />
                            
                            {/* <div>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>

                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div> */}
                        
                        </>
                    
                    )
                    }).reverse() }
        
        
        </>
    )

}

export default OnPrint;