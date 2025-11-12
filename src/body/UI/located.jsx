import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {AdvancedMarker, APIProvider, InfoWindow, Map, useAdvancedMarkerRef} from '@vis.gl/react-google-maps';
import '../styles/located.css';
import { getAnalytics, logEvent } from "firebase/analytics";
// import img_demo from '../../assets/image-6-blog-article-doctor-template2.jpg';
import { CardVariants, TextVariant } from '../../helper/animation';
import icono from '../../assets/icons/Imagotipo_negativo.svg'
import { CarouselLocations } from '../../components/carousel_locations';
import videoCoita from '../../assets/coita-video.mp4';

const sectionTuxtla = [
  {
    section: "Instalaciones",
    title: "",
    context: "Cómodo acceso, estacionamiento gratuito y seguro, Sala de espera amplia, climatizada y moderna. Equipos modernos, radiografia digitales y lo último en tecnología para tú atención",
  },
  // {
  //   section: "Sala de espera",
  //   title: "",
  //   context: "Sala de espera amplia, climatizada y moderna",
  // },
  // {
  //   section: "Consultorio",
  //   title: "",
  //   context: "Equipos modernos, radiografia digitales y lo último en tecnología para tú atención",
  // }
]

const sectionCoita = [
  {
    section: "Instalaciones",
    title: "",
    context: "Cómodo acceso, estacionamiento gratuito y seguro",
  },
  {
    section: "Sala de espera",
    title: "",
    context: "Sala de espera amplia, climatizada y moderna",
  },
  {
    section: "Consultorio",
    title: "",
    context: "Equipos modernos, radiografia digitales y lo último en tecnología para tú atención",
  }
]

const LocatedSection = () => {

  const coordTux = useMemo(() => (
    {lat: 16.775444878997085, lng: -93.09865865069378}
  ), []);

  const coordCoita = useMemo(() => (
    {lat: 16.76458164538728, lng: -93.37970200989359}
  ), []);

  // Calcular el centro entre las dos coordenadas
  const centerCoord = useMemo(() => {
    const centerLat = (coordTux.lat + coordCoita.lat) / 2;
    const centerLng = (coordTux.lng + coordCoita.lng) / 2;
    return { lat: centerLat, lng: centerLng };
  }, [coordTux, coordCoita]);

  const [infowindowOpenTux, setInfowindowOpenTux] = useState(true);
  const [markerRefTux, markerTux] = useAdvancedMarkerRef();

  const [infowindowOpenCoita, setInfowindowOpenCoita] = useState(true);
  const [markerRefCoita, markerCoita] = useAdvancedMarkerRef();

  const openInMapTux = useCallback(() => {
    const analytics = getAnalytics();
    logEvent(analytics, 'open_view_map_tux');

    window.open(`https://maps.google.com?q=${coordTux.lat},${coordTux.lng}`, '_blank')
  }, [coordTux])

  const openInMapCoita = useCallback(() => {
    const analytics = getAnalytics();
    logEvent(analytics, 'open_view_map_coita');

    window.open(`https://maps.google.com?q=${coordCoita.lat},${coordCoita.lng}`, '_blank')
  }, [coordCoita])

  return (
    <motion.section 
      className='section' 
      id="ubicame"
    >
      <motion.div className='container-medium-618px home-located' variants={TextVariant}>
        <div className='subtitle'>Establecimiento</div>
        <h2>Experiencia dental positiva y relajante</h2>
        <p>
          Siente la diferencia de un consultorio que combina modernidad y calidez en cada consulta 
        </p>
      </motion.div>
      <div className='container-default w-container'>
        <div className='w-dyn-list'>
          <div role="list" className='home-blog-grid w-dyn-items'>
            <CarouselLocations title='Ocozocoautla' video={videoCoita} sections={sectionCoita} />
            <CarouselLocations title='Tuxtla Gtz' video={videoCoita} sections={sectionTuxtla} />
          </div>
        </div>
        <motion.div style={{ width: "100%"}} variants={CardVariants}>
          <APIProvider apiKey={`${import.meta.env.VITE_KEY_GOOGLE_MAP}`}>
            <Map
              id='drmap'
              mapId="c54d301a0e46f31e"
              style={{width: '100%', height: '500px'}}
              defaultCenter={centerCoord}
              defaultZoom={12}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapTypeId={'roadmap'}
            >
              <AdvancedMarker
                ref={markerRefTux}
                title={'Dra. Heydi Corado'}
                position={coordTux}
                onClick={() => setInfowindowOpenTux(true)}
              >
                <div style={{ background: "var(--neutral-800)", padding: 10, borderRadius: 32 }}>
                  <img width={45} height={45} src={icono} />
                </div>
              </AdvancedMarker>
              {infowindowOpenTux && (
                <InfoWindow
                  anchor={markerTux}
                  maxWidth={200}
                  onCloseClick={() => setInfowindowOpenTux(false)}>
                    Guatemala 10a, Estrella de Oriente, 29010 Tuxtla Gutiérrez, Chis. &nbsp;
                    <a onClick={openInMapTux}  style={{ cursor: "pointer", textDecoration: "undeline", color: "blue"}}>Abrir mapa</a>
                </InfoWindow>
              )}

              <AdvancedMarker
                ref={markerRefCoita}
                title={'Dra. Heydi Corado'}
                position={coordCoita}
                onClick={() => setInfowindowOpenCoita(true)}
              >
                <div style={{ background: "var(--neutral-800)", padding: 10, borderRadius: 32 }}>
                  <img width={45} height={45} src={icono} />
                </div>
              </AdvancedMarker>
              {infowindowOpenCoita && (
                <InfoWindow
                  anchor={markerCoita}
                  maxWidth={200}
                  onCloseClick={() => setInfowindowOpenCoita(false)}>
                    5 poniente 573, entre 4 y 5 norte, San Bernabé, 29140 Ocozocoautla de Espinosa, Chis. &nbsp;
                    <a onClick={openInMapCoita}  style={{ cursor: "pointer", textDecoration: "undeline", color: "blue"}}>Abrir mapa</a>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </motion.div>
      </div>
      
    </motion.section>
  )
}

export default LocatedSection