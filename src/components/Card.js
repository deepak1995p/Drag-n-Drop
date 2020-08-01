import React from 'react'
import './Card.css'


function Card(props) {

    const dragStart = e => {
        const target =e.target;

        e.dataTransfer.setData('card_id', target.id);

        console.log(target.id)  

        setTimeout(() => {
           // target.style.display ="none";
        });

    }

    const dragOver = e => {
        //e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            className="col-lg-3 col-md-3 col-sm-6 col-12 bg-secondary card-css"
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
           {props.children} 
        </div>
    )
}

export default Card
