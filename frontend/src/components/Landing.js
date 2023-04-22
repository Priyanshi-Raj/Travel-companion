import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
 import StateCropsData from './assets/StateCropsData.json';
// import State from './State';
import Navbar from './Navbar';
// import About from './About';
import styles from './Landing.module.css';
import './Landing.css';
// import SelectSearch from 'react-select-search';
import axios from 'axios';
import Landing1 from './assets/images/cap4.jpg';

import cap1 from './assets/images/cap1.jpg';
import cap2 from './assets/images/cap2.jpg';
import cap3 from './assets/images/cap3.webp';
import cap4 from './assets/images/c1.jpg';
import cap5 from './assets/images/cap5.jpg';
import Services from './Services';
// import TutorialVideos from './TutorialVideos';

// import Tools from './Tools';

const Landing = () => {
  const [state, setState] = useState('State');
  const [page, setPage] = useState('/');
  console.log(StateCropsData);
  let navigate = useNavigate();

  const changeState = (e) => {
    // e.preventDefault();
    setState(e.target.value);
    setPage('/state');

    navigate('/state');
  };
  useEffect(() => {
    // fetchWeather();
  }, [state]);
  console.log(state);
  
  return (
    <div className='App'>
      <div style={{ height: '100vh', position: 'relative' }} className='mb-5' container>
        <Navbar />{' '}
       
        <div className={styles.some}>
          {' '}
       
          <div className='land'>
            <div className='land1'>
              {' '}
              <img className='landing1' src={Landing1} alt='Landing 1' />
            </div>
            {/* <div className='land2'>
              {' '}
              <img className='landing2' src={Landing2} alt='Landinglanding2' />
            </div>{' '} */}
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: '2',
              top: '35%',
              width: '30rem',
            }}
            className='containert d-flex flex-column align-center w-100 justify-content-center h-50 mt-5 search'
          >
            <div
              style={{
                fontWeight: '700',
                fontStretch: 'expanded',
                position: 'absolute',
                 
              }}
              className={`landingBold h1 text-center heading`}
            >
              {' '}
              Helping Tourist To Get Authentic Experience{' '}
            </div>{' '}
            <div className='text-center my-3 mb-5 heading1'>
              <Link
                style={{
                  height: '50px',
                  width: '280px',
                  border: '1px black solid',
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: ' 60px',
                  padding: '10px 30px',
                  fontFamily: 'Montserrat',
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: '500',
                  position: 'absolute',
                   bottom: '1rem',
                  marginTop:'-2rem'
                }}
                to={'/indiapage'}
              >
                Choose your Destination
            
              </Link>
              
            </div>{' '}
           {' '}
          </div>{' '}
        </div>{' '}
      </div>
     
      <div className='capable'>
        <p className='para'> What we are capable of ? </p>
        <div className='abilities'>
          <div className='ability'>
            <img src={cap1} alt='cap1' width='375' height='180' />
            <div className='title'>
              <p className='t1'> What are various services provided by Us </p>{' '}
              <p className='t2'> Want to serve for our tourists? </p>{' '}
            </div>{' '}
          </div>{' '}
          <Link style={{ textDecoration: 'none' }} to='/plant'>
            <div className='ability'>
              <img src={cap2} alt='cap1' width='375' height='180' />
              <div className='title'>
                <p className='t1'> Immersive Experiences </p>{' '}
                <p className='t2'> Online tool </p>{' '}
              </div>{' '}
            </div>{' '}
          </Link>
         
        </div>{' '}
        <div className='abilities'>
          <div className='ability'>
            <img src={cap4} alt='cap1' width='375' height='180' />
            <div className='title'>
              <p className='t1'> New Places to explore </p>{' '}
              <p className='t2'> Newsletter </p>{' '}
            </div>{' '}
          </div>{' '}
          <div className='ability'>
            <img src={cap5} alt='cap1' width='375' height='180' />
            <div className='title'>
              <p className='t1'> Emergency Helplines </p>{' '}
              <p className='t2'> online tool and portal </p>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}

      <Services/>
  
    </div>
  );
};

export default Landing;
