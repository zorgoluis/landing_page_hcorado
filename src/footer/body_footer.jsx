import React from 'react';
import '../footer/styles/footer.css';
import ListMenu from './UI/list_menu';

const BodyFooter = () => {
  return (
    <footer className='footer'>
      <div className='container-default w-container'>
        <div className='top-content footer-top-content'>
          <a className='footer-logo-container w-inline-block w--current'>
            <img className='footer-logo' />
          </a>
          <p className='paragraph-small footer-top-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet dolor eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className='divider footer-divider-1'></div>
        <ListMenu />
      </div>
    </footer>
  )
}

export default BodyFooter