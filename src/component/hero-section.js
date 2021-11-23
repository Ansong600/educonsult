import React, { useState } from 'react'
import '../App.css'
import { Button } from './Button'
import './hero-section.css'
import { Link } from 'react-router-dom'

function HeroSection() {
    

    return (
        <div className='hero-container'>
            
            <div className='hero-btns'>
                <Link to='/contact'>
                
                  {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn-large' buttonColor='blue'>
                   
                    Apply Now
                  </Button> */}

                  <button className='apply-now-btn'>Apply Now</button>
                </Link>
            </div>

            
        </div>

            

       

    );
}

export default HeroSection