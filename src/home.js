import React, { Component } from 'react'
import img from './dbms-bg-img.jpg'
import homeCSS from './home.css'
import { Button } from './button1'
// console.log(logo);

function home(){
    return (
      <div className='bgImg'>
       <img src={img} alt="Logo" />;
       <h1>lorem ipsum</h1>
       <p>what are you waiting for?</p>
       <div className='homeBtn'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                Login Now
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
                Get Started <i className='far fa-play-circle'/>
            </Button>
       </div>
      </div>
    )
  
}

export default home;
