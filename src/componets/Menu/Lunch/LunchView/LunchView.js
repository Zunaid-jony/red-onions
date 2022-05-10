
import React,{useEffect,useState } from 'react';
import Footer from '../../../Footer/Footer';
import Home from './../../../Home/Home';
import { FiShoppingCart } from 'react-icons/fi';
import { useParams } from 'react-router';

const LunchView = () => {
    const{lunchID} =useParams();
    const [breakfas, setbreakfas] = useState({})
    useEffect(() =>{
         const url = `https://api.npoint.io/d2e1393336aca0646b17/${lunchID}`
        fetch(url)
        .then(response => response.json())
        .then(data => setbreakfas(data))
    },[lunchID])
    return (
        <div>
        <Home></Home>
       <div className='breakfull-container container'>
           <div className='name-list'>
           <h1> {lunchID.name}</h1>
           <p> {lunchID.description}</p>
           <h4>{lunchID.price} $  <button className='button-1'> -  +</button></h4>
           <button  className='button-add' > <FiShoppingCart></FiShoppingCart> add</button>
           

           </div>
           <div className='img-i'>
            <img src={breakfas.img}></img>
               
            </div>
            
  
       
       </div>
        <Footer></Footer>
    </div>
    );
};

export default LunchView;