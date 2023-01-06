import React from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
    const { id } = useParams();
    return <div>{id}</div>;
};

export default ShowDetails;