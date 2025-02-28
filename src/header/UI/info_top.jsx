import React from 'react';
import '../styles/info_top.css'

const InfoTop = () => {
  return (
    <div className='header-contact-wrapper'>
      <a className='header-contact-link' href={`tel:${import.meta.env.VITE_NUMBER_PHONE}`}>{import.meta.env.VITE_NUMBER_PHONE}</a>
      <a className='header-contact-link' href='mailto:heydicorados@gmail.com'>heydicorados@gmail.com</a>
    </div>
  )
}

export default InfoTop