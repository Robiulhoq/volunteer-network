import React from 'react';
import fakedata from '../fakedata/fakedata.json'

const AdminPanal = () => {
    const eventdata = fakedata;
    const hendleAddEvent = () =>{
        fetch('http://localhost:4000/addEvent',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(eventdata)
        })
    }
    return (
        <div>
            <h2>This is AdminPanal </h2>
        <button onClick={hendleAddEvent}>Add Event</button>
        </div>
    );
};

export default AdminPanal;