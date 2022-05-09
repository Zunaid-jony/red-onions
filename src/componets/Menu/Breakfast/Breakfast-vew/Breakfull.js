import React,{useEffect,useState } from 'react';
import Home from '../../../Home/Home';
import { useParams } from 'react-router';

const Breakfull = () => {
    const{breakfasID} =useParams();
    const [breakfas, setbreakfas] = useState({})
    useEffect(() =>{
        // const url = `https://jsonkeeper.com/b/N50R/${breakfasID}`
        fetch(`serviceback.json:${breakfasID}`)
        .then(response => response.json())
        .then(data => setbreakfas(data))
    },[])
    return (
        <div>
            <Home></Home>
            <h1> Breakfull </h1>
            <h1> Breakfull </h1>
            <h1> Breakfull {breakfasID} </h1>
            <h1> name: {breakfas.name}</h1>
        </div>
    );
};

export default Breakfull;