import React, { useState } from 'react'
import Card from './Card';


const Board = (props) => {

    let [pictures, UpdateImages] = useState([
        "https://dummyimage.com/600x400/54e437/fff&text=Image+1",
        "https://dummyimage.com/600x400/33e827/fff&text=Image+2",
        "https://dummyimage.com/600x400/64e137/fff&text=Image+3",
        "https://dummyimage.com/600x400/74e837/fff&text=Image+4",
        "https://dummyimage.com/600x400/64e137/fff&text=Image+5",
        "https://dummyimage.com/600x400/74e837/fff&text=Image+6",
        "https://dummyimage.com/600x400/18e437/fff&text=Image+7",
        "https://dummyimage.com/600x400/20e827/fff&text=Image+8",
    ]);

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        let ans = prompt("Are you sure you want to replace image {A} with image {B} with input YES and NO")
        if ((ans === "Yes") || (ans === "yes") || (ans === "YES")) {
            let tempArray = { ...pictures };
            let temp = tempArray[card_id];
            tempArray[card_id] = tempArray[e.target.id];
            tempArray[e.target.id] = temp;
            const result = Object.values(tempArray);
            UpdateImages(result);
        }

    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            id={props.id}
            className="board row"
            onDrop={drop}
            onDragOver={dragOver}
        >
            {
                pictures.map((pic, index) =>
                    <Card id="card-1" className="card" draggable="true" key={index}>
                        <img src={pic} alt="1" className="Image" id={index} />
                    </Card>
                )
            }
        </div>
    )
}

export default Board
