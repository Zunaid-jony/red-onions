import React,{ useEffect, useState } from 'react';
import Home from '../../Home/Home';
import Breakfast from '../Breakfast/Breakfast';
import Footer from './../../Footer/Footer';





const Service1 = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('serviceback.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);


    return (
        <div>
            <Home></Home>
           
                {
                    services.map(service => <Breakfast></Breakfast>)
                }
                    <button className='button' style={{}}>Checkout your food</button>
            <Footer></Footer>
            </div>
            
       
    );
};

export default Service1;