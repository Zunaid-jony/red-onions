
import React,{useEffect,useState } from 'react';
import Footer from '../../../Footer/Footer';
import Home from './../../../Home/Home';
import { FiShoppingCart } from 'react-icons/fi';
import { useParams } from 'react-router';

const LunchView = () => {
    const{lunchID} =useParams();
    const [lunch, setbreakfas] = useState({})
    useEffect(() =>{
         const url = `https://api.npoint.io/6ded1ee261ae3f7eecc3/${lunchID}`
        fetch(url)
        .then(response => response.json())
        .then(data => setbreakfas(data))
    },[lunchID])
    return (
        <div>
        <Home></Home>
       <div className='breakfull-container container'>
           <div className='name-list'>
           <h1> {lunch.name}</h1>
           <p> {lunch.description}</p>
           <h4>{lunch.price} $  <button className='button-1'> -  +</button></h4>
           <button  className='button-add' > <FiShoppingCart></FiShoppingCart> add</button>
           

           </div>
           <div className='img-i'>
            <img src={lunch.img}></img>
               
            </div>
            
  
       
       </div>
        <Footer></Footer>
    </div>
    );
};

export default LunchView;