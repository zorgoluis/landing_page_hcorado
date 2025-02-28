import React, { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {AdvancedMarker, APIProvider, InfoWindow, Map, Pin, useAdvancedMarkerRef} from '@vis.gl/react-google-maps';
import '../styles/located.css';
import { getAnalytics, logEvent } from "firebase/analytics";
import img_art_1 from '../../assets/image-1-blog-article-doctor-template.jpg';
import img_art_2 from '../../assets/image-2-blog-article-doctor-template.jpg';
import img_art_3 from '../../assets/image-3-blog-article-doctor-template.jpg';
// import img_demo from '../../assets/image-6-blog-article-doctor-template2.jpg';
import { CardVariants, TextVariant } from '../../helper/animation';
import icono from '../../assets/icons/Imagotipo_negativo.svg'

const articles = [
  {
    section: "Instalaciones",
    title: "",
    context: "Cómodo acceso, estacionamiento gratuito y seguro",
    image: img_art_1
  },
  {
    section: "Sala de espera",
    title: "",
    context: "Sala de espera amplia, climatizada y moderna",
    image: img_art_2
  },
  {
    section: "Consultorio",
    title: "",
    context: "Equipos modernos, radiografia digitales y lo último en tecnología para tú atención",
    image: img_art_3
  }
]

const LocatedSection = () => {

  const coord = useMemo(() => (
    {lat: 16.775444878997085, lng: -93.09865865069378}
  ), []);

  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const openInMap = useCallback(() => {
    const analytics = getAnalytics();
    logEvent(analytics, 'open_view_map');

    window.open(`https://maps.google.com?q=${coord.lat},${coord.lng}`, '_blank')
  }, [coord])

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
            {
              articles.map((art, index) => (
                <motion.div key={"art-card"+index} className='blog-article-item w-dyn-item'>
                  <div className='blog-article-item-wrapper'>
                    <a className='image-wrapper blog-article-item-image w-inline-block'>
                      <img src={art.image} className='image blog-article-item-image' />
                    </a>
                    <a className='card blog-article-item w-inline-block'>
                      <div className='card-blog-article-item-about'>
                        <div className='subtitle color-primary-1 card-blog-article-item-about'>{art.section}</div>
                        {/* <div className='card-blog-article-item-about-divider'></div> */}
                        {/* <div>September 1, 2022</div> */}
                      </div>
                      <div className='card-blog-article-item-content'>
                        <h3 className='title card-blog-article-item'>
                          {art.title}
                        </h3>
                        <p>
                          {art.context}
                        </p>
                      </div>
                      <div></div>
                    </a>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </div>
        <motion.div style={{ width: "100%"}} variants={CardVariants}>
          <APIProvider apiKey={`${import.meta.env.VITE_KEY_GOOGLE_MAP}`}>
            <Map
              id='drmap'
              mapId="c54d301a0e46f31e"
              style={{width: '100%', height: '500px'}}
              defaultCenter={coord}
              defaultZoom={18}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapTypeId={'roadmap'}
            >
              <AdvancedMarker
                ref={markerRef}
                title={'Dra. Heydi Corado'}
                position={coord}
                onClick={() => setInfowindowOpen(true)}
              >
                <div style={{ background: "var(--neutral-800)", padding: 10, borderRadius: 32 }}>
                  <img width={45} height={45} src={icono} />
                </div>
              </AdvancedMarker>
              {infowindowOpen && (
                <InfoWindow
                  anchor={marker}
                  maxWidth={200}
                  onCloseClick={() => setInfowindowOpen(false)}>
                    Guatemala 10a, Estrella de Oriente, 29010 Tuxtla Gutiérrez, Chis. &nbsp;
                    <a onClick={openInMap}  style={{ cursor: "pointer", textDecoration: "undeline", color: "blue"}}>Abrir mapa</a>
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