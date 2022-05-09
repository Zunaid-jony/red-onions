import React from 'react';
import Footer from '../../Footer/Footer';
import Home from '../../Home/Home';
import './Breakfast.css'

const Breakfast = ({service}) => {
    const {id, name ,price,img,description} = service;
    return (
            <div className='imgs'>
            
            <img src={img}></img>
            <h4>Price: {price}</h4>
            <h5>{name}</h5>
        
            
        </div>
    
    );
};

export default Breakfast;