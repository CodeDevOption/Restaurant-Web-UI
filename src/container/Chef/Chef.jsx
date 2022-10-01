import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__chef app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper_img-reverse" 
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
      >
          <img src={images.chef} alt="app__chef" />
      </div>
      <div className="app__wrapper_info">
          <SubHeading title="Chef's Word" />
          <h1 className='headtext__cormorant'>What We Believe In</h1>

          <div className="app__chef-content">
              <div className="app__chef-content_quote">
                    <img src={images.quote}  alt="quote"/>
                    <p className='p__opensans' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, ipsa.</p>
              </div>
              <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam quaerat culpa? Neque voluptatem eligendi obcaecati dolorem ad reprehenderit excepturi cumque ab! Itaque deserunt dolorem sunt ipsam voluptate assumenda, non, maiores illum maxime quos error adipisci. Sit molestias ducimus optio.</p>
          </div>
          <div className="app__chef-sign">
              <p>Kevin Luo</p>
              <p className='p__opensans'>Chef & Founder</p>
              <img src={images.sign} alt="Chef__Sign" />
          </div>
      </div>
  </div>
);

export default Chef;
