import React from 'react'
import ButtonsBottom from '../components/ButtonsBottom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ContactForm from '../components/ContactForm'
import Navigation from '../components/Navigation'

const Contact = () => {
  return (
      <div className="contact">
      <div className='contact-main'>
      <Navigation />
      <ButtonsBottom left='About' />
      <ContactForm />
        <div className='contact-infos'>
          <div className='phone'>
            <div className='content'>
              <h4>Phone</h4>
              <CopyToClipboard text='06 37 45 71 82 ' className='hover'>
              <p style={{cursor: 'pointer'}}
                className='clipboard'
                onClick={() => {
                  alert('Phone copied !');
                }}
              >06 58 61 79 96</p>
            </CopyToClipboard>
          </div>
        </div>
        <div className='email'>
          <div className='content'>
            <h4>Email</h4>
            <CopyToClipboard text='trianamunoz@gmail.com' className='hover'>
            <p style={{cursor: 'pointer'}}
                className='clipboard'
                onClick={() => {
                  alert('Email copied !');
                }}
              >contact.studiomunoz@gmail.com</p>
            </CopyToClipboard>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
