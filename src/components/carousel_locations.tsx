import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

interface CarouselLocationsProps {
  sections: Array<any>;
  video: string;
  title: string;
}
export const CarouselLocations: React.FC<CarouselLocationsProps> = ({ sections, video, title }) => {
  return (
    <div className='blog-article-item w-dyn-item'>
      <div className='blog-article-item-wrapper'>
        <div className='image-wrapper blog-article-item-image'>
          <video 
            src={video} 
            className='image blog-article-item-image' 
            autoPlay 
            muted 
            loop 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
          <div className='video-title-overlay'>
            <h2 className='video-title'>{title}</h2>
          </div>
          {/* <Swiper
            effect='flip'
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10
            }}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {sections.map((section, index) => (
              <SwiperSlide key={index}>
                <a className='card blog-article-item w-inline-block'>
                  <div className='card-blog-article-item-about'>
                    <div className='subtitle color-primary-1 card-blog-article-item-about'>{section.section}</div>
                  </div>
                  <div className='card-blog-article-item-content'>
                    <h3 className='title card-blog-article-item'>
                      {section.title}
                    </h3>
                    <p>
                      {section.context}
                    </p>
                  </div>
                  <div></div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </div>
  )
}