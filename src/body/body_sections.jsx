import React from 'react'
import FeaturesSections from './UI/features';
import AboutSection from './UI/about';
import ServiceSection from './UI/service';
import CitaSection from './UI/cita';
import VideoSection from './UI/video';
import LocatedSection from './UI/located';

const BodySections = () => {
  return (
    <>
      <FeaturesSections />
      <AboutSection />
      <ServiceSection />
      <CitaSection />
      {/* <VideoSection /> */}
      <LocatedSection />
    </>
  )
}

export default BodySections;