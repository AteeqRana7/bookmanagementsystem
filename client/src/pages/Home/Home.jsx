import React from 'react';
import hero from '../../assets/hero.jpg';
import './home.css';
import 'animate.css';

const Home = () => {
  return (
    <section className='home-page'>
      <div className='hero-container animate__animated animate__backInDown'>
        <h1 className='hero__title'>Welcome to BXTrack Bookstore!</h1>
        <img src={hero} alt='Family reading books' className='hero__image' />
      </div>
      <div className='home-page__btn animate__animated animate__backInDown'>
        <a href='/books'>
          <button>View Collection</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
