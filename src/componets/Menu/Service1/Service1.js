import React,{ useEffect, useState } from 'react';
import Home from '../../Home/Home';
import Breakfast from '../Breakfast/Breakfast';
import Footer from './../../Footer/Footer';
import './Service.css'





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
           
                <div className='service-container'>
                {
                    services.map(service => <Breakfast
                    key={service.id}
                    service={service}
                    ></Breakfast>)
                }
                </div>
                    <button className='button' style={{}}>Checkout your food</button>
            <Footer></Footer>
            </div>
            
       
    );
};

export default Service1;