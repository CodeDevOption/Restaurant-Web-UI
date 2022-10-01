import React from 'react';

import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay  flex__center">
        <img src={images.G} alt="" />
    </div>
  <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about"  
                      data-aos="zoom-in-up"              
                      data-aos-delay="50"
                      data-aos-duration="1000"  
                      data-aos-mirror="true"
      >
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about__spoon" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis at numquam velit, in laudantium quos expedita necessitatibus accusantium optio earum.</p>
          <button className='custom__button'>Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center"     data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
     >
          <img src={images.knife} alt="Knife" />
      </div> 
      <div className="app__aboutus-content_history" 
            data-aos="zoom-in-up"              
            data-aos-delay="50"
            data-aos-duration="1000"  
            data-aos-mirror="true"
        >
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about__spoon" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis at numquam velit, in laudantium quos expedita necessitatibus accusantium optio earum.</p>
          <button className='custom__button'>Know More</button>
      </div>
  </div>
  </div>
);

export default AboutUs;
