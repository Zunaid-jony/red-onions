import React,{useEffect,useState } from 'react';
import { useParams } from 'react-router';
import Home from './../../../Home/Home';
import Footer from './../../../Footer/Footer';
import { FiShoppingCart } from 'react-icons/fi';

const DinnerView = () => {
    const{dinnerID} =useParams();
    const [dinner, setbreakfas] = useState({})
    useEffect(() =>{
         const url = `https://api.npoint.io/6ded1ee261ae3f7eecc3/${dinnerID}`
        fetch(url)
        .then(response => response.json())
        .then(data => setbreakfas(data))
    },[dinnerID])
    return (
        <div>
        <Home></Home>
       <div className='breakfull-container container'>
           <div className='name-list'>
           <h1> {dinner.name}</h1>
           <p> {dinner.description}</p>
           <h4>{dinner.price} $  <button className='button-1'> -  +</button></h4>
           <button  className='button-add' > <FiShoppingCart></FiShoppingCart> add</button>
           

           </div>
           <div className='img-i'>
            <img src={dinner.img}></img>
               
            </div>
            
  
       
       </div>
        <Footer></Footer>
    </div>
    );
};

export default DinnerView;