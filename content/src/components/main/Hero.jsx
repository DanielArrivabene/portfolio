import '../../styles/components/Hero.scss';

import { motion } from 'framer-motion';

import { IoArrowForwardSharp } from 'react-icons/io5';

function Hero() {
  return (
    <section id='home'>
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
        <p className='hero__message'><span>NEW</span> ✨ Free For Freelancer</p>
        <h1 className='text-center hero__title'>
          Web Development
          <br /> & Design
        </h1>
        <p className='text-center hero__description'>
          Desenvolvimento de Websites com alta responsividade e SEO. Feitos sob
          medida para o seu negócio.
        </p>
        <a href='#atributes' className='hero__buton'>
          Saiba mais <IoArrowForwardSharp />
        </a>
      </article>
    </section>
  );
}

export default Hero;
