import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
//  import Logo from './assets/images/Vector.svg';


const Navbar = () => {
  return (
    <div className='navbar d-flex'>
      <div id='navbar' className='d-flex w-100 space-between px-2 '>
        {/* <div className='d-flex'>
          <img width='120px' className='mx-3 m' src={Logo} alt='..' />
        
        </div> */}
        <div>
          <div className='d-flex'>
            <div className='mx-3'>
              <Link
                style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
                className='text-dark text-decoration-none h6'
                to='/'
              >
                Home
              </Link>
            </div>
            <div className='mx-3'>
              <Link
                style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
                className='text-dark text-decoration-none h6'
                to='/tools'
              >
                About Us
              </Link>
            </div>
            <div className='mx-3'>
              <Link
                style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
                className='text-dark text-decoration-none h6'
                to='/'
              >
               Services
              </Link>
            </div>
            <div className='mx-3'>
              <Link
                style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
                className='text-dark text-decoration-none h6'
                to='/sign-up'
              >
                SignUp
              </Link>
            </div>
            <div className='mx-3'>
              <Link
                style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
                className='text-dark text-decoration-none h6'
                to='/budget'
              >
                Budget
              </Link>
            </div>
            <div className='mx-3'>
              <Link
                style={{ fontSize: '17px', position: 'relative', top: '1rem' }}
                className='text-dark text-decoration-none h6'
                to='/'
              >
                Contact Us
              </Link>
            </div>
            <div className='' id='google_translate_element'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
