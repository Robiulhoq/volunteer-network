import React from 'react';

const RagisterEventInfo = (props) => {
    const {img, title, dath, id} = props.singleEvent;
    const hendleDeleteEvent = (e) =>{
        console.log(e.target.parentNode)
        fetch('http://localhost:4000/delateevent?id='+id, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                e.target.parentNode.style.display = "none";
            }
        })
    }

    return (
        <div>
            <div className="img">
                <img src={img} alt=""/>
                <h3>{title}</h3>
                <h6>{dath}</h6>
                <button onClick={hendleDeleteEvent}>cencel</button>
            </div>
        </div>
    );
};

export default RagisterEventInfo;