import '../../styles/components/Projects.scss';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Repara from '../../assets/repara.png';
import Kateli from '../../assets/Kateli.png';

const projectsList = [
  {
    name: 'Clínica Kateli',
    description:
      'Projeto construído em WordPress, HTML, CSS e Javascript. Este site conta com um design elegante e refinado, atendendo aos mais altos padrões e gostos.',
    image: Kateli,
    urlSite: 'http://katelisaude.com.br/',
  },
  {
    name: 'Repara!',
    description:
      'Projeto construído em HTML, Bootstrap, CSS, Sass, Javascript e React. Com foco em apresentar a empresa ao público alvo e atrair clientes, Repara! conta com uma identidade visual única, intuitiva e dinâmica.',
    image: Repara,
    urlGithub: 'https://github.com/DanielArrivabene/repara',
    urlSite: 'https://repara-tec.vercel.app/',
  },
];

function Projects() {
  const { ref, inView } = useInView(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [inView, animation]);

  return (
    <section id='projects' className='min-vh-100 d-flex align-items-center'>
      <div className='container'>
        <h2 className='text-center'>
          Confira alguns dos projetos já realizados
        </h2>
        <article className='projects__container'>
          <div className='row justify-content-center'>
            {projectsList.map((project) => (
              <motion.div
                ref={ref}
                className='project col-sm-5'
                key={project.name}
                initial={{ y: 80, opacity: 0 }}
                animate={animation}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img
                  src={project.image}
                  alt='project image'
                  className='project__image'
                  loading='lazy'
                />
                <div className='project__text_container'>
                  <h3 className='project__title'>{project.name}</h3>
                  <p className='project__descryption'>{project.description}</p>
                  <div className='project__links_container'>
                    <a href={project.urlSite} className='project__link'>
                      Visitar
                    </a>
                    {project.urlGithub && (
                      <a href={project.urlGithub} className='project__link'>
                        Github
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
