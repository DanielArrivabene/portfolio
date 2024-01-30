import '../../styles/components/Apresentation.scss';

import { motion } from 'framer-motion';

import { IoArrowForwardSharp } from 'react-icons/io5';

function Apresentation() {
  return (
    <section
      id='home'
      className=' container min-vh-100 d-flex 
      flex-column
      justify-content-center align-items-center
    '
    >
      <h1 className='text-center mb-4'>
        Elegância,{' '}
        <motion.span 
          initial={
            {
              backgroundColor: '#ffe4e4'
            }
          }
          animate={{
            backgroundColor: ['#ffe4e0', '#f5fed9', '#d9fedd', '#d9fef3', '#d9f8fe'],
          }}
          transition={{
            duration: 10,
            delay: 2.5,
            repeat: Infinity,
            repeatType: 'reverse' ,
            repeatDelay: 0,
          }}
        >
          Inovação
        </motion.span>
        <br />e Produtividade
      </h1>
      <p className='text-center mb-5'>
        Desenvolvimento de Websites com alta responsividade e <br />  SEO integrados - feitos sob medida para o seu negócio.
      </p>
      <div className='apresentation__butons_container'>
        <a href='#about' className='apresentation__buton mt-5'>
          Saiba mais <IoArrowForwardSharp />
        </a>
      </div>
    </section>
  );
}

export default Apresentation;
