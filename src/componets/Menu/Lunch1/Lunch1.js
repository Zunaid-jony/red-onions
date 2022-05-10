import React,{ useEffect, useState } from 'react';
import Home from './../../Home/Home';
import Footer from './../../Footer/Footer';
import Lunch from './../Lunch/Lunch';



const Lunch1
 = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    useState()
    return (
        <div>
             <Home></Home>
           
           <div className='service-container'>
           {
               services.map(service => <Lunch
               key={service.id}
               service={service}
               ></Lunch>)
           }
          
           </div>
               <button className='button' style={{}}>Checkout your food</button>
       <Footer></Footer>
            
        </div>
    );
};

export default Lunch1
;