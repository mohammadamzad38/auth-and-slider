import React from 'react';

const Carousel = () => {
  return (
   <section>
    <div className='swiper'>
    <div class="swiper-wrapper">
    <div class="swiper-slide">
      <div className="card">
         <div className="font"></div>
         <img src='./image/slide1.jpg'></img>
         <button>Explore</button>
      </div>
    </div>

    <div class="swiper-slide">
      <div className="card">
         <div className="font"></div>
         <img src='./image/slide2.jpg'></img>
         <button>Explore</button>
      </div>
    </div>
    <div class="swiper-slide">
      <div className="card">
         <div className="font"></div>
         <img src='./image/slide3.jpg'></img>
         <button>Explore</button>
      </div>
    </div>
    <div class="swiper-slide">
      <div className="card">
         <div className="font"></div>
         <img src='./image/slide4.jpg'></img>
         <button>Explore</button>
      </div>
    </div>
    <div class="swiper-slide">
      <div className="card">
         <div className="font"></div>
         <img src='./image/slide5.jpg'></img>
         <button>Explore</button>
      </div>
    </div>
  </div>

  <div class="swiper-pagination"></div>
    </div>
   </section>
  );
};

export default Carousel;