import '../../styles/components/Apresentation.scss';

import { motion } from 'framer-motion';

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
    </section>
  );
}

export default Apresentation;
