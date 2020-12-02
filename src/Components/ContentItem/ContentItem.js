import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContentItem = (props) => {
    const {img, title, id} = props.content;
        const catchId = key =>{
        }
    return (
        <div style={{display: 'inline-block', padding: '20px'}}>
                 <Link to={"/ragister/" + id }>
                                  <Card onClick={() => catchId(id)}  style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            </Card>
            </Link>

        </div>
    );
};

export default ContentItem;