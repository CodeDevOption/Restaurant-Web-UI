import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper__info">
        <SubHeading title='Contact' />
        <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
        <div className="app__wrapper-content">
            <p className='p__opensans'>Land Ends Bungalow, Whatcroft Hall Lane, Rudhaath, CW97SG</p>
            <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
            <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 pm</p>
            <p className='p__opensans'>San - Sun: 10:00 am - 03:00 pm</p>
            <button style={{marginTop:'2rem'}} className='custom__button'>Visit Us</button>

          </div>
    </div>
    <div className="app__wrapper_img" 
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
    >
        <img src={images.findus} alt="Find_Us" />
    </div>
  </div>
);

export default FindUs;
