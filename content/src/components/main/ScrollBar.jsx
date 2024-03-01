import '../../styles/components/ScrollBar.scss';

import { motion } from 'framer-motion';

function ScrollBar() {
  return (
    <section id='scrollbar_container'>
      <motion.div
        className='scrollbar'
        initial={{
          rotateZ: '-10deg',
        }}
      >
        <motion.p
          className='mb-0'
          initial={{
            x: -100,
          }}
          animate={{
            x: [-100, -3000, -100],
          }}
          transition={{
            duration: 40,
            repeat: 'infinite',
            repeatType: 'loop',
            repeatDelay: 0,
          }}
        >
          Webdesign <span>development</span> Interfaces{' '}
          <span>Optimizations</span> Webdesign <span>development</span>{' '}
          Interfaces <span>Optimizations</span> Webdesign{' '}
          <span>development</span> Interfaces <span>Optimizations</span>
        </motion.p>
      </motion.div>
    </section>
  );
}

export default ScrollBar;
