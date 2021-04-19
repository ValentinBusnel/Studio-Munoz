import React from 'react'
import Navbar from '../components/Navbar'
import ButtonsBottom from '../components/ButtonsBottom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
      <div className="contact">
      <div className='contact-main'>
      <Navbar />
      <ButtonsBottom left='About' />
      <ContactForm />
        <div className='contact-infos'>
          <div className='phone'>
            <div className='content'>
              <h4>téléphone</h4>
              <CopyToClipboard text='06 37 45 71 82 ' className='hover'>
              <p style={{cursor: 'pointer'}}
                className='clipboard'
                onClick={() => {
                  alert('Téléphone copié !');
                }}
              >06 37 45 71 82</p>
            </CopyToClipboard>
          </div>
        </div>
        <div className='email'>
          <div className='content'>
            <h4>email</h4>
            <CopyToClipboard text='trianamunoz@gmail.com' className='hover'>
            <p style={{cursor: 'pointer'}}
                className='clipboard'
                onClick={() => {
                  alert('Email copié !');
                }}
              >trianamunoz@gmail.com</p>
            </CopyToClipboard>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
