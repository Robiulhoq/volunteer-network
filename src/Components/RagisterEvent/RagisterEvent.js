import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import RagisterEventInfo from '../RagisterEventInfo/RagisterEventInfo';

const RagisterEvent = () => {
    const {eventId} = useParams();
    const [ragistarEvent, setRagistarEvent] = useState([]);
    const [loging, setLoging] = useContext(UserContext);
    console.log(loging.email);
    console.log(ragistarEvent);
    useEffect(() =>{
        fetch('http://localhost:4000/ragisteruser?email=' + loging.email)
        .then(res => res.json())
        .then(data => {
            setRagistarEvent(data);
        })
    }, [])

    

    return (
        <div>
            <h2>This is ragister event: {}</h2>
            {
                ragistarEvent.map(singleEvent => <RagisterEventInfo singleEvent={singleEvent}></RagisterEventInfo>)
            }
    
            
        </div>
    );
};

export default RagisterEvent;