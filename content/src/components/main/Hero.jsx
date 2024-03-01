import '../../styles/components/Hero.scss';

//import { motion } from 'framer-motion';

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
        <h1 className='text-center hero__title'>
          <span className="active"> Webdesigner </span>
          <br /> <span>& Developer</span>
        </h1>
      </article>
      <Services />
    </section>
  );
}

export default Hero;
