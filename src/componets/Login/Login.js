import React from 'react';
import './Login.css'
import { FcGoogle  } from 'react-icons/fc';

import Img from '../../componets/images/logo2.png'
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Login = () => {
    const {signInuSingGoogle} = useAuth();
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
                <br></br>
                <p>OR</p> 
                <button onClick={signInuSingGoogle} className='button  button1 google'> <FcGoogle></FcGoogle>  Google SignIn</button>  
            
                <br></br>
                <br></br>
                <Link to='/registration'>Crate new Account</Link>
                

               
            </div>
        </section>
    );
};

export default Login;