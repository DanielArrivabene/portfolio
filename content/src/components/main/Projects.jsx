import '../../styles/components/Projects.scss';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Repara from '../../assets/repara.png';
import Mentalize from '../../assets/mentalize.png';

function Projects() {
  const { ref, inView } = useInView(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
      });
    }
  }, [inView, animation]);

  return (
    <section
      id='projects'
      className='min-vh-100 d-flex align-items-center'
      ref={ref}
    >
      <div className='container'>
        <h2 className='text-center'>
          Confira alguns dos projetos já realizados
        </h2>
        <article className='projects__container'>
          <div className='row justify-content-center'>
            <div className='col-6 project__image'>
              <motion.img
                src={Repara}
                alt='Repara!'
                loading='lazy'
                initial={{ x: -100, opacity: 0 }}
                animate={animation}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <div className='col-5 project__description'>
              <h3>Repara!</h3>
              <p>
                Projeto construído em HTML, Bootstrap, CSS, Sass, Javascript e
                React. Com foco em apresentar a empresa ao público alvo e atrair
                clientes, Repara! conta com uma identidade visual única,
                intuitiva e dinâmica. Fique por dentro dos detalhes{' '}
                <a
                  href='https://repara-tec.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  visitando o site
                </a>{' '}
                e{' '}
                <a
                  href='https://github.com/DanielArrivabene/repara'
                  target='_blank'
                  rel='noreferrer'
                >
                  analisando o código
                </a>
                .
              </p>
            </div>
          </div>
          {/*
          <div className='row justify-content-center'>
            <div className='col-6 project__image order-1'>
              <motion.img
                src={Mentalize}
                alt='Repara!'
                loading='lazy'
                initial={{ x: 100, opacity: 0 }}
                animate={animation}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <div className='col-5 project__description text-end'>
              <h3>Mentalize</h3>
              <p>
                Site da clínica médica Mentalize, desenvolvido com HTML, CSS,
                Sass, Javascript e React, tendo uma área integrada com os posts
                do Instagram da clínica. O objetivo do projeto é informar aos
                pacientes sobre as atividades oferecidas e horários de
                funcionamento da clínica. Verifique a conclusão desse objetivo{' '}
                <a href='#'>visitando o site</a> e{' '}
                <a href='#'>analisando o código</a>.
              </p>
            </div>
          </div>
          */}
        </article>
      </div>
    </section>
  );
}

export default Projects;
