import React from 'react'
import FeaturesSections from './UI/features';
import AboutSection from './UI/about';
import ServiceSection from './UI/service';

const BodySections = () => {
  return (
    <>
      <FeaturesSections />
      <AboutSection />
      <ServiceSection />
    </>
  )
}

export default BodySections;