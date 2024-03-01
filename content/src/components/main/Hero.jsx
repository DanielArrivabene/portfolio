import { useState } from 'react';

import '../../styles/components/Hero.scss';

//import { motion } from 'framer-motion';

import Services from './Services';

function Hero() {
  const [topTitle, setTopTitle] = useState('active');
  const [bottomTitle, setBottomTitle] = useState('');

  const handleScroll = () => {
    if (window.scrollY == 0) {
      setTopTitle('active');
      setBottomTitle('');
    } else {
      setTopTitle('');
      setBottomTitle('active');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <section
      id='home'
      className='min-vh-100 d-flex 
    flex-column
    justify-content-center align-items-center'
    >
      <article
        className='container d-flex 
      flex-column
      justify-content-center align-items-center'
      >
        {/*{' '}
        <motion.span
          initial={{
            backgroundColor: '#ffe4e4',
          }}
          animate={{
            backgroundColor: ['#f5fed9', '#d9fedd', '#d9f8fe'],
          }}
          transition={{
            duration: 10,
            delay: 2.5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0,
          }}
        >
          Inovação
        </motion.span>*/}
        <h1 className='text-center hero__title'>
          <span className={`${topTitle}`}> Webdesigner </span>
          <br /> <span className={`${bottomTitle}`}>& Developer</span>
        </h1>
      </article>
      <Services />
    </section>
  );
}

export default Hero;
