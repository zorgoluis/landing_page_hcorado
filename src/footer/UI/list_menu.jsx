import React from 'react'

const ListMenu = () => {
  return (
    <div className='w-layout-grid footer-grid'>
      <div className='footer-nav-wrapper'>
        <div className='footer-nav-box'>
          <h2 className='title footer-title'>Menu</h2>
          <div className='footer-nav-content'>
            <ul role='list' className='footer-nav-links w-list-unstyled'>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link w--current'>Inicio</a>
              </li>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link w--current'>Sobre mi</a>
              </li>
            </ul>
            <ul role='list' className='footer-nav-links last w-list-unstyled'>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link w--current'>Servicios</a>
              </li>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link w--current'>Sabias que...</a>
              </li>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link w--current'>Ubicame</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className='footer-nav-box'>
          <h2 className='title footer-title'>Utility Pages</h2>
          <div className='footer-nav-content'>
            <ul role='list' className='footer-nav-links w-list-unstyled'>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link w--current'>Home</a>
              </li>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link w--current'>About</a>
              </li>
            </ul>
            <ul role='list' className='footer-nav-links last w-list-unstyled'>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link w--current'>Contacto</a>
              </li>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link w--current'>Planes</a>
              </li>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link w--current'>Solo un plan</a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className='footer-nav-box last'>
          <h2 className='title footer-title'>Contacto</h2>
          <div className='footer-nav-content'>
            <ul role="list" className='footer-nav-links last w-list-unstyled'>
              <li className='footer-nav-link-item'>
                <p className='paragraph-small footer-address'>
                  Centro Dental - Dra. Heydi Corado - Especialista en Endodoncia. &nbsp;Guatemala 10a, &nbsp;Estrella de Oriente, 29010 Tuxtla Gutiérrez, Chis.
                </p>
              </li>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link' href='mailto:heydicorados@gmail.com'>heydicorados@gmail.com</a>
              </li>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link' href='tel:9612657825'>{import.meta.env.VITE_NUMBER_PHONE}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ListMenu