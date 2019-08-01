import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './index.scss';

const SwipeCarousel = () => {
  return (
    <div className="SwipeCarousel">
      <div className="desc">Swipe Left or Right, Keyboard 👈 or 👉</div>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        verticalSwipe="natural"
        swipeable={true}
        useKeyboardArrows={true}
        emulateTouch={true}
        transitionTime={250}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1289557/pexels-photo-1289557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1080355/pexels-photo-1080355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1439603/pexels-photo-1439603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
      </Carousel>
    </div>
  );
};

export default SwipeCarousel;
