import React, {useLayoutEffect} from 'react';
import $ from 'jquery';

import bannerImg1 from '../../../assets/images/cover-26.jpg';
import bannerImg2 from '../../../assets/images/cover-28.jpg';
import bannerImg3 from '../../../assets/images/cover-27.jpg';

const Carousel = () => {
  return (
    <>
      <div className='col-12 col-md-8 col-lg-9 d-none d-md-block offset-md-n2 order-2'>
        <div
          className='h-100 flickity-buttons-bottom-left flickity-enabled is-draggable is-fade'
          data-flickity='{"fade": true, "prevNextButtons": true, "wrapAround": true}'
          tabIndex={0}
          ref={'slider'}>
          <div
            className='flickity-viewport'
            style={{height: 0, touchAction: 'pan-y'}}>
            <div className='flickity-slider' style={{left: 0}}>
              <div
                className='w-100 h-md-100 bg-cover is-selected'
                style={{
                  backgroundImage: `url(${bannerImg1})`,
                  position: 'absolute',
                  opacity: 1,
                }}></div>
              <div
                className='w-100 h-md-100 bg-cover'
                style={{
                  backgroundImage: `url(${bannerImg2})`,
                  position: 'absolute',
                  opacity: 1,
                }}
                aria-hidden='true'></div>
              <div
                className='w-100 h-md-100 bg-cover'
                style={{
                  backgroundImage: `url(${bannerImg3})`,
                  position: 'absolute',
                  opacity: 1,
                }}
                aria-hidden='true'></div>
            </div>
          </div>
          <button
            className='flickity-button flickity-prev-next-button previous'
            type='button'
            aria-label='Previous'>
            <svg className='flickity-button-icon' viewBox='0 0 100 100'>
              <path
                d='M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z'
                className='arrow'></path>
            </svg>
          </button>
          <button
            className='flickity-button flickity-prev-next-button next'
            type='button'
            aria-label='Next'>
            <svg className='flickity-button-icon' viewBox='0 0 100 100'>
              <path
                d='M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z'
                className='arrow'
                transform='translate(100, 100) rotate(180) '></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
