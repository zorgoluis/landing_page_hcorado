import React from 'react';
import '../styles/located.css';
import img_art_1 from '../../assets/image-6-blog-article-doctor-template1.jpg';
import img_art_2 from '../../assets/image-6-blog-article-doctor-template2.jpg';
import img_art_3 from '../../assets/image-6-blog-article-doctor-template3.jpeg';
import { section } from 'framer-motion/client';

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
  return (
    <section className='section'>
      <div className='container-medium-618px home-located'>
        <div className='subtitle'>Establecimientos</div>
        <h2>Experiencia dental positiva y relajante</h2>
        <p>
          Seinte la diferencia de un consultorio que combina modernidad y calidez en cada consulta 
        </p>
      </div>
      <div className='container-default w-container'>
        <div className='w-dyn-list'>
          <div role="list" className='home-blog-grid w-dyn-items'>
            {
              articles.map((art, index) => (
                <div key={"art-card"+index} className='blog-article-item w-dyn-item'>
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
                </div>
              ))
            }
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default LocatedSection