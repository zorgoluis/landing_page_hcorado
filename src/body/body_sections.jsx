import React from 'react'
import FeaturesSections from './UI/features';
import AboutSection from './UI/about';
import ServiceSection from './UI/service';
import CitaSection from './UI/cita';

const BodySections = () => {
  return (
    <>
      <FeaturesSections />
      <AboutSection />
      <ServiceSection />
      <CitaSection />
    </>
  )
}

export default BodySections;