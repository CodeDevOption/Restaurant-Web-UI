import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import {data, images} from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>

      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
          <div className="app__speciaMenu-menu_wine flex__center">
              <p className='app__specialMenu-menu_heading'>wine & Beer</p>
              <div className="app__specialMenu_menu_items">
                    {data.wines.map((wine, index)=>(
                        <MenuItem key={wine.title + index} title={wine.title} tags={wine.tags} price={wine.price} />
                    ))}
              </div>
          </div>
              <div className="app__specialMenu-menu_img"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
              >
                      <img src={images.menu} alt="Menu__img" />
              </div>
              <div className="app__speciaMenu-menu_cocktails flex__center">
              <p className='app__specialMenu-menu_heading'>wine & Beer</p>
              <div className="app__specialMenu_menu_items">
                    {data.cocktails.map((cocktails, index)=>(
                        <MenuItem key={cocktails.title + index} title={cocktails.title} tags={cocktails.tags} price={cocktails.price} />
                    ))}
              </div>
          </div>
      </div>
             <div className="" style={{marginTop:'15px'}}>
                    <button type='button' className='custom__button'>View More</button>
              </div> 

  </div>
);

export default SpecialMenu;
