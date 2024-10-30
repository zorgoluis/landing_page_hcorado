import React from 'react';
import '../footer/styles/footer.css';
import ListMenu from './UI/list_menu';

const social_network = [
  {
    type: "Facebook",
    icon: "bi bi-facebook",
    url: "https://www.facebook.com/profile.php?id=61566935885796&mibextid=LQQJ4d"
  },
  {
    type: "Instagram",
    icon: "bi bi-instagram",
    url: "https://www.instagram.com/dra.heydicorado?igsh=dGM4b2F0Znlnbm93"
  },
  {
    type: "Whatsapp",
    icon: "bi bi-whatsapp",
    url: "https://wa.me/+5219612657825"
  }
]

const BodyFooter = () => {

  return (
    <footer className='footer'>
      <div className='container-default w-container'>
        <div className='top-content footer-top-content'>
          <a className='footer-logo-container w-inline-block w--current'>
            <img className='footer-logo' />
          </a>
          <p className='paragraph-small footer-top-content'>
            CED PROF 12513439&nbsp;<br />
            Aviso de publicidad COFEPRIS: 2407012002A00384
          </p>
        </div>
        <div className='divider footer-divider-1'></div>
        <ListMenu />
      </div>
      <div className='divider footer-divider-2'></div>
      <div className='container-default w-container'>
        <div className='small-print-wrapper'>
          <div className='paragraph-small small-print'>
            Copyright&nbsp;© Doc | Designed - Powered by Luis Salgado
          </div>
          <div className='w-layout-grid footer-social-media-grid'>
          {
            social_network.map((sn, k) => (
              <a key={`icon-${k}`} className='footer-social-media-link' target='_blank' href={sn.url} title={sn.type}>
                <i className={sn.icon}></i>
              </a>
            ))
          }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default BodyFooter