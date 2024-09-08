import React, { useEffect } from 'react';
import '../HeroSection/HeroSection.css';

export default function HeroSection() {

  return (
    <div>
      <div className='body'>
        <div className='fluid-container'>
          <div className=''>
            <div className='hero_section'>
              <div className='row row_castum'>
                <div className='col-lg-12 col-md-6 col-sm-12 main_heading_hero'>
                  <div className=''>
                    <div className='Craving_art_text'>
                      <h6 className=''>
                        Craving ART
                      </h6>
                    </div>
                    <div className='text_banner_hero'>
                      <h2 className='Bringing_text text'>Elevate<br />
                      Your Home</h2>
                    </div>
                    <div className='text_line_hero'>
                      <p>
                      Elegantly crafted fountain corner table statues, paintings, lamps, and shoe pieces that highlight the natural charm and adaptability of their materials
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div>
            <div className='hero_images_linear'>
              {/* <img className='man_hero_img' src={Herobaner} alt="Hero Banner"/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
