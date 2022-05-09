import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Home from '../../Home/Home';
import './Breakfast.css'

const Breakfast = ({service}) => {
    const {id, name ,price,img,description} = service;
    const url =`/breakfast/${id}`;
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

export default Breakfast;