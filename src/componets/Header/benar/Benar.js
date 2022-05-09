import React from 'react';
import benar from '../../../../src/benar.png'
import './Benar.css'
const Benar = () => {
    return (
        <section className='banner d-flex align-items-center text-center'>
            <div className='container'>
                <h1>Best Food Waiting For Your Belly</h1>

                <div className='search-box col-md-6 my-5 mx-auto'>
                    <input
                        type="text"
                        id="query"
                    
                        className='form-control'
                        placeholder='Search Food Item'
                    />
                   
                        <button
                           
                            className='btn btn-danger search-btn btn-rounded'
                        >
                            Search
                    </button>
                  
                </div>
            </div>
        </section>
    );
};

export default Benar;