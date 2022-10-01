import React from 'react';
import { SubHeading } from '../../components';
import { images,data } from '../../constants';

import './Laurels.css';

const AwardCard = ({award:{imgUrl,title,subtitle}})=>(
    <div className="app__laurels_awards-card">
        <img src={imgUrl} alt="award" />
        <div className="app__laurels_awards-card_content">
            <p className='p__cormorant' style={{color:'#DCCA87'}} >{title}</p>
            <p className='p__cormorant'  >{subtitle}</p>
        </div>
        
    </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className="app__wrapper_info">
          <SubHeading title= "Awards & rcognition" />
          <h1 className='headtext__cormorant'>Our Laurels</h1>
          <div className="app__laurels_awards">
              {
                data.awards.map((award,index) =>(
                  <AwardCard award={award} key={award.title}  />
                ))
              }
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
          <img src={images.laurels} />
      </div>
  </div>
);

export default Laurels;
