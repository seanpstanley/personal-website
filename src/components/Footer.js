import React from 'react';
import './Footer.css';
/*import { Button } from './Button';*/
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          thanks for stopping by
        </p>
        <p className='footer-subscription-text'>
          take a look at some of these links
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>work experience</h2>
            <Link to='/experience'>see stuff i've worked on</Link>
          </div>
          <div className='footer-link-items'>
            <h2>projects</h2>
            <Link to='/projects'>check out personal projects</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>about me</h2>
            <Link to='/about'>self explanatory</Link>
          </div>
          <div className='footer-link-items'>
            <h2>social media</h2>
            <a aria-label='GitHub' href='https://github.com/seanpstanley/'>github </a>
            <a aria-label='LinkedIn' href='https://www.linkedin.com/in/seanpstanley/'>linkedin</a>
            <a aria-label='Facebook' href='https://www.facebook.com/sean.stanley.50364/'>facebook</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <a
              className='social-icon-link github'
              href='https://github.com/seanpstanley/'
              aria-label='GitHub'
            >
              <i className="fab fa-github" />
            </a>
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/seanpstanley/'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/sean.stanley.50364/'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;