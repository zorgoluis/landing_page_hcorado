import FeaturesSections from './UI/features';
import AboutSection from './UI/about';
import ServiceSection from './UI/service';
import CitaSection from './UI/cita';
import LocatedSection from './UI/located';
import FollowerSerction from './UI/follower';
import VideoSection from './UI/video';

const BodySections = () => {
  return (
    <>
      <FeaturesSections />
      <AboutSection />
      <VideoSection />
      <ServiceSection />
      <CitaSection />
      <LocatedSection />
      <FollowerSerction />
    </>
  )
}

export default BodySections;