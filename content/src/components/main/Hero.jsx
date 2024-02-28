import '../../styles/components/Hero.scss';

import { motion } from 'framer-motion';

import { HiArrowLongRight } from 'react-icons/hi2';
import Services from './Services';

function Hero() {
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
        <p className='hero__message'>
          <span>NEW</span> ✨ Free For Freelancer
        </p>
        <h1 className='text-center hero__title'>
          Web Development
          <br /> & Design
        </h1>
        <p className='text-center hero__description fw-light'>
          Websites com sucesso nas buscas e adaptáveis a todos os dipositivos —
          Desenvolvidos sob medida para o seu negócio.
        </p>
        <a href='#clients' className='hero__buton'>
          Saiba mais <HiArrowLongRight />
        </a>
      </article>
      <Services />
    </section>
  );
}

export default Hero;
