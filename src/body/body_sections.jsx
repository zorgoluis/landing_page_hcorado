import FeaturesSections from './UI/features';
import AboutSection from './UI/about';
import ServiceSection from './UI/service';
import CitaSection from './UI/cita';
import LocatedSection from './UI/located';
import FollowerSerction from './UI/follower';

const BodySections = () => {
  return (
    <>
      <FeaturesSections />
      <AboutSection />
      <ServiceSection />
      <CitaSection />
      {/* <VideoSection /> */}
      <LocatedSection />
      <FollowerSerction />
    </>
  )
}

export default BodySections;