import React from 'react';
import './Login.css'

import Img from '../../componets/images/logo2.png'

const Login = () => {
    return (
        <section className='login d-flex align-items-center text-center'>
           <div>

           </div>
            <div className='container '>
                <img className='logos' src={Img}></img>
                <br></br>
                <br></br>
                <input className='button' placeholder=' Name'></input>
                <br></br>
                <br></br>
                <input  className='button' placeholder='Email'></input>
                <br></br>
                <br></br>
                <input className='button' placeholder='Password'></input>
                <br></br>
                <br></br>
                <input className='button' placeholder='Confirm Password'></input>
                <br></br>
                <br></br>
                <input className='button  button1' placeholder='Sign up'></input>
                

               
            </div>
        </section>
    );
};

export default Login;