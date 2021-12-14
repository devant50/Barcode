import React from "react";
import { Button } from 'react-bootstrap';

function CardOptions(props){

    function remove(){
        const arr = props.cards[0];
        const setarr = props.cards[1];
        const index = props.id;
        
        console.log(index);
        // console.log(props.id)
        
        // console.log(arr)
        // document.getElementById('#card')

        arr.splice(index,1)
        setarr([...arr]);
        console.log(props.cards[0])

        //document.getElementById("card-"+index).outerHTML = "<tr></tr>";

        // console.log(document.getElementById("card-"+index).outerHTML);
        
    }

    function enlarge (){
        const arr = props.cards[0];
        //const setarr = props.cards[1];
        const index = props.id;

        console.log('Enlarged '+ index);
    }

    

    return(
        <div className="d-grid gap-1 d-md-flex justify-content-md-end">
            <Button className="" type="button" onClick={ remove } variant="danger" size="sm">
                <img src={props.icons[0]} />
            </Button>
            <br />
            
            <Button type="button" onClick={ enlarge} variant="warning" size="sm">
                <img src={props.icons[1]} />
            </Button>
        </div>


    )

}

export default CardOptions;