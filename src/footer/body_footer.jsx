import '../footer/styles/footer.css';
import ListMenu from './UI/list_menu';
import logo_white from '../assets/icons/logo_white.svg'

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
    url: `https://wa.me/+521${import.meta.env.VITE_NUMBER_PHONE}`
  }
]

const BodyFooter = () => {

  return (
    <footer className='footer'>
      <div className='container-default w-container'>
        <div className='top-content footer-top-content'>
          <a className='footer-logo-container w-inline-block w--current'>
            <img className='footer-logo' src={logo_white} />
          </a>
          <p className='paragraph-small footer-top-content'>
            Licenciatura en Cirujano Dentista<br />
            Cédula profesional 12513439 <br />
            ----------------------------------------------------------- <br />
            Especialidad en Endodoncia <br />
            Cédula Especialidad 15126908<br />
            ----------------------------------------------------------- <br />
            UNICACH-Universidad de Guadalajara<br />
            <br />
            Aviso de publicidad COFEPRIS: 2507015056X00545
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