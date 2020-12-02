import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Ragister = () => {
    const [loging, setLoging] = useContext(UserContext);
    const [clickEvent, setClickEvent] = useState({});
    const [event, setEvent] = useState(false)
    const { eventId } = useParams();
    const [ragister, setRagister] =useState({
        name: '',
        email: '',
        dath: '',
        desicrption: '',
        liberary:''

    });
    const data = {...loging,...ragister, ...clickEvent}
    const hendleFormSubmit = (e) =>{
        
        fetch('http://localhost:4000/ragisterinfo', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('ragistation successfully');
                setEvent(true);
            }
        })
        e.preventDefault();
    }

    useEffect(() =>{
        fetch('http://localhost:4000/ragistation/' + eventId)
        .then(res => res.json())
        .then(data => {
            setClickEvent(data)
        })
    },[])
     const hendleBlur = (e) =>{
            if(e.target.name === 'name'){
                const ragisterinfo = {...ragister};
                ragisterinfo.name = e.target.value;
                setRagister(ragisterinfo);
            }
            if(e.target.name === 'email'){
                const ragisterinfo = {...ragister};
                ragisterinfo.email = e.target.value;
                setRagister(ragisterinfo);
            }
            if(e.target.name === 'dath'){
                const ragisterinfo = {...ragister};
                ragisterinfo.dath = e.target.value;
                setRagister(ragisterinfo);
            }
            if(e.target.name === 'desicrption'){
                const ragisterinfo = {...ragister};
                ragisterinfo.desicrption = e.target.value;
                setRagister(ragisterinfo);
            }
            if(e.target.name === 'liberary'){
                const ragisterinfo = {...ragister};
                ragisterinfo.liberary = e.target.value;
                setRagister(ragisterinfo);
            }
     }

    return (
        <div>
            
            <Container>
                <Row>
                    <Col xs={10} md={8}>
                    <form action="" onSubmit={hendleFormSubmit}>
                    <Form.Group>
                    <h3>Ragister as a volunteer</h3>
                        <Form.Control name="name" onBlur={hendleBlur} type="text" value={loging.name} placeholder="Full Name" />
                        <br />
                        <Form.Control name="email" onBlur={hendleBlur} type="text" value={loging.email} placeholder="User Name or Email"/>
                        <br />
                        <Form.Control name="dath" onBlur={hendleBlur} type="text" placeholder="Dath"/>
                        <br/>
                        <Form.Control name="desicrption" onBlur={hendleBlur} type="text" placeholder="Desicrption" />
                        <br/>
                        <Form.Control name="liberary" onBlur={hendleBlur} type="text" placeholder="Organize books at the liberary" />
                        <br/>
                        <Form.Control type="submit" placeholder="Ragistation"/> 
                    </Form.Group>
                    </form>
                    </Col>
                </Row>
            </Container>
    {
        event === true? <Link to={"/ragisterEvent"}><button>Show Event</button></Link>:
        null
    }
        </div>
    );
};

export default Ragister;