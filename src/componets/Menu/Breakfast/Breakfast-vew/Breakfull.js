import React,{useEffect,useState } from 'react';
import Home from '../../../Home/Home';
import { useParams } from 'react-router';
import Footer from '../../../Footer/Footer';
import './Breakfull.css'
import { FiShoppingCart } from 'react-icons/fi';

const Breakfull = () => {
    const{breakfasID} =useParams();
    const [breakfas, setbreakfas] = useState({})
    useEffect(() =>{
         const url = ` https://api.npoint.io/d2e1393336aca0646b17/${breakfasID}`
        fetch(url)
        .then(response => response.json())
        .then(data => setbreakfas(data))
    },[breakfasID])
    return (
        <div>
            <Home></Home>
           <div className='breakfull-container container'>
               <div className='name-list'>
               <h1> {breakfas.name}</h1>
               <p> {breakfas.description}</p>
               <h4>{breakfas.price} $  <button className='button-1'> -  +</button></h4>
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

export default Breakfull;