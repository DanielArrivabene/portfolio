import '../../styles/components/Projects.scss';

import { motion } from 'framer-motion';

const projectsList = [
  {
    name: 'Repara',
    class: 'repara',
    urlSite: 'https://repara-tec.vercel.app/',
  },
  {
    name: 'Clínica Kateli',
    class: 'kateli',
    urlSite: 'http://katelisaude.com.br/',
  },
  {
    name: 'Repara',
    class: 'repara',
    urlSite: 'https://repara-tec.vercel.app/',
  },
  {
    name: 'Seu Projeto',
    class: 'your',
    urlSite: '#contact',
    target: '_self',
    alert: 'Em breve',
  },
];

function Projects() {
  return (
    <section
      id='projects'
      className='min-vh-100 d-flex flex-column align-items-center section-area'
    >
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
      <div className='container'>
        <h2 className='text-center'>Portfólio</h2>
        <p className='text-center mb-5'>
          Confira alguns dos projetos já realizados.
        </p>
        <article className='projects__container'>
          {projectsList.map((project) => (
            <div className={`project ${project.class}`} key={project.name}>
              <div className='project__data_container'>
                <a
                  href={project.urlSite}
                  target={project.target ? project.target : '_blank'}
                  rel='noreferrer'
                  className='project__link'
                >
                  <h3 className='project__title'>{project.name}</h3>
                </a>
              </div>
              {project.alert && (
                <span className='project__alert'>{project.alert}</span>
              )}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default Projects;
