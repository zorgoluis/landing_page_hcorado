import React from 'react';
import '../styles/video.css';

import img_video from '../../assets/image-home-video-doctor-template.jpg';
import icon_video from '../../assets/icons/icon-home-video-doctor-template.svg';
import icon_check from '../../assets/icons/icon-feature-home-video-doctor-template.svg';

const listCheck = [
  {title: "15+ years of experience"},
  {title: "Urgent 24-hour service"},
  {title: "High quality care"}
]

const VideoSection = () => {
  return (
    <section className='section'>
      <div className='container-medium-682px home-video'>
        <div className='subtitle'>Dra. Heydi Corado</div>
        <h2 className='title home-video'>Watch Dr. Heydi video to learn why he is the right doctor for you</h2>
      </div>
      <div className='container-default w-container'>
        <div className='home-video-wrapper'>
          <div className='image-wrapper home-video'>
            <img src={img_video} />
            <div className='filter'></div>
            <a className='home-video-button w-inline-block w-lightbox'>
              <img src={icon_video} className='image home-video-button-icon' />
            </a>
          </div>
          <div className='card bg-neutral-200 home-video'>
            <h3>Why Dr. Heydi Corado?</h3>
            <p className='paragraph card-home-video'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique libero viverra ultricies commodo.
            </p>
            <div className='w-layout-grid card-home-video-features-grid'>
              {listCheck.map((item, index) => (
                <div key={"card-video-"+index} className='card-home-video-feature-wrapper'>
                  <img src={icon_check} className='card-home-video-feature-icon' />
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
            <a className='button-primary w-button'>Book an Appointment</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection