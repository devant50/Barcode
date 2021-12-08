import React from "react";
import { Button } from 'react-bootstrap';

function CardOptions(props){

    function log(e){
        const arr = props.cards[0];
        const setarr = props.cards[1];
        const index = props.id;
        const firstHalf = '';
        const secondHalf = '';

        console.log(index);
        // console.log(props.id)
        
        // console.log(arr)
        // document.getElementById('#card')

        //arr.splice(props.id,1)
        //setarr(arr);

        document.getElementById("card-"+index).outerHTML = "<tr></tr>";

        // console.log(document.getElementById("card-"+index).outerHTML);
        
    }

    

    return(
        <div id='cardButtons'>
            <Button type="button" onClick={(e)=>{ log(e) }} variant="danger" size="sm">
                <img src={props.icons[0]} />
            </Button>
            <br />
            
            <Button type="button" onClick={()=>{ log() }} variant="warning" size="sm">
                <img src={props.icons[1]} />
            </Button>
        </div>


    )

}

export default CardOptions;