import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import ContentItem from '../ContentItem/ContentItem';
import data from '../fakedata/fakedata.json';

const Content = () => {
    return (
        <div>
           {
               data.map(singleData => <ContentItem key={singleData.id} content={singleData}></ContentItem>)
           }
        </div>
    );
};

export default Content;