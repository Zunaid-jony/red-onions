import React from 'react';
import { Link } from 'react-router-dom';


const Dinner = ({service}) => {
    const {id, name ,price,img,description} = service;
    const url =`/dinner/${id}`;
    return (
        <div className='imgs'>
            
        <img src={img}></img>
        <h5>{name}</h5>
        <p>{description}</p>
        <h4>Price: {price}</h4>
        <Link to={url}>Vew</Link>
        
    
        
    </div>
    );
};

export default Dinner;