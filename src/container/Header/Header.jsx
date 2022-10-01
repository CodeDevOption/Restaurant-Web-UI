import React from 'react';

import './Header.css';
import images from '../../constants/images';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding ' id='home'>
      <div className="app__wrapper_info" data-aos="fade-right"   data-aos-mirror="true" >
      <SubHeading title="Chease the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans'> Sit tellus lobortis sed senectus vivamus molestie. Condimentum volupat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className='custom__button' style={{marginTop:'2rem'}}>Explore Menu</button>
      </div>
      <div className="app__wrapper_img"  
    data-aos="fade-up"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
    >
          <img src={images.welcome} />
      </div>
  </div>
);

export default Header;
