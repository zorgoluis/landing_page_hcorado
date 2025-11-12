import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './styles/publication_modal.css';


interface PublicationData {
  id: number;
  image: string;
  title: string;
  description?: string;
  link?: string;
}

interface PublicitationImgProps {
  publications?: PublicationData[];
  autoShow?: boolean;
  showDuration?: number;
}

export const PublicitationImg: React.FC<PublicitationImgProps> = ({ 
  publications = [],
  autoShow = true,
  showDuration = Infinity
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Publicidades con imágenes reales
  const defaultPublications: PublicationData[] = [
    {
      id: 1,
      image: '/promotions/IMG_0469.jpg',
      title: 'Promoción Especial',
      description: '¡Aprovecha nuestras ofertas exclusivas en tratamientos dentales!',
    },
    {
      id: 2,
      image: '/promotions/IMG_0471.jpg',
      title: 'Servicios Premium',
      description: 'Descubre nuestros tratamientos de alta calidad con tecnología moderna',
    }
  ];

  const publicationsToShow = publications.length > 0 ? publications : defaultPublications;

  useEffect(() => {
    if (autoShow) {
      // Mostrar modal después de un breve delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [autoShow]);

  useEffect(() => {
    if (isVisible && showDuration > 0) {
      // Auto-cerrar después del tiempo especificado
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, showDuration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, showDuration]);

  const closeModal = () => {
    setIsVisible(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleLinkClick = (link?: string) => {
    if (link) {
      if (link.startsWith('#')) {
        // Scroll a sección interna
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Abrir enlace externo
        window.open(link, '_blank');
      }
      closeModal();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="publication-modal-overlay"
      onClick={handleBackdropClick}
    >
      <div className="publication-modal">
        <button 
          className="publication-close-btn"
          onClick={closeModal}
          aria-label="Cerrar"
        >
          ✕
        </button>
        
        <div className="publication-content">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={publicationsToShow.length > 1}
            className="publication-swiper"
          >
            {publicationsToShow.map((publication) => (
              <SwiperSlide key={publication.id}>
                <div className="publication-slide">
                  <div className="publication-image-container">
                    <img 
                      src={publication.image} 
                      alt={publication.title}
                      className="publication-image"
                    />
                  </div>
                  <div className="publication-info">
                    <h3 className="publication-title">{publication.title}</h3>
                    {publication.description && (
                      <p className="publication-description">{publication.description}</p>
                    )}
                    {publication.link && (
                      <button 
                        className="publication-btn"
                        onClick={() => handleLinkClick(publication.link)}
                      >
                        Ver más
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
