import React from 'react';
import '../styles/located.css';
import img_art_1 from '../../assets/image-6-blog-article-doctor-template1.jpg';
import img_art_2 from '../../assets/image-6-blog-article-doctor-template2.jpg';
import img_art_3 from '../../assets/image-6-blog-article-doctor-template3.jpeg';

const articles = [
  {
    title: "Our articles on health and personal wellness",
    context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed.",
    image: img_art_1
  },
  {
    title: "Our articles on health and personal wellness",
    context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed.",
    image: img_art_2
  },
  {
    title: "Our articles on health and personal wellness",
    context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed.",
    image: img_art_3
  }
]

const LocatedSection = () => {
  return (
    <section className='section'>
      <div className='container-medium-618px home-located'>
        <div className='subtitle'>Conocenos</div>
        <h2>Our articles on health and personal wellness</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh cursus at sed sagittis amet, sed.
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
                        <div className='subtitle color-primary-1 card-blog-article-item-about'>Resources</div>
                        <div className='card-blog-article-item-about-divider'></div>
                        <div>September 1, 2022</div>
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