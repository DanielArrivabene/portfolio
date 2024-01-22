import '../../styles/components/Apresentation.scss';

import { motion } from 'framer-motion';

import Assinature from '../../assets/assinature.png'

function Apresentation() {
  return (
    <section
      id='Apresentation'
      className=' container min-vh-100 d-flex 
      flex-column
      justify-content-center align-items-center
    '
    >
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'tween',
          duration: 1.2,
          delay: 0.5,
        }}
      >
        <i>D</i>aniel <i>G</i>. <i>A</i>rrivabene
      </motion.h1>
      <motion.h2
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'tween',
          duration: 1.1,
          delay: 1.2,
        }}
      >
        Frontend Web Developer
      </motion.h2>
      <img src={Assinature} alt="Daniel Goulart Arrivabene" className="apresentation_assinature" />
    </section>
  );
}

export default Apresentation;
