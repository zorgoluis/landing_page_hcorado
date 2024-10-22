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
        </div>
        <div className='footer-nav-box'>
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
        </div>
        <div className='footer-nav-box last'>
          <h2 className='title footer-title'>Contacto</h2>
          <div className='footer-nav-content'>
            <ul role="list" className='footer-nav-links last w-list-unstyled'>
              <li className='footer-nav-link-item'>
                <p className='paragraph-small footer-address'>
                  24 Broadcast Drive Charlotte&nbsp;NC 28202, USA
                </p>
              </li>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link'>contact@doc.com</a>
              </li>
              <li className='footer-nav-link-item'>
                <a className='footer-nav-link'>(487) 120 - 7980</a>
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