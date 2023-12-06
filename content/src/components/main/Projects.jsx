import '../../styles/components/Projects.scss';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Repara from '../../assets/repara.png';
import Kateli from '../../assets/Kateli.png';

const projectsList = [
  {
    name: 'Repara!',
    description:
      'Projeto construído em HTML, Bootstrap, CSS, Sass, Javascript e React. Com foco em apresentar a empresa ao público alvo e atrair clientes, Repara! conta com uma identidade visual única, intuitiva e dinâmica. Fique por dentro dos detalhes',
    image: Repara,
    urlGithub: 'https://github.com/DanielArrivabene/repara',
    urlSite: 'https://repara-tec.vercel.app/',
  },
  {
    name: 'Clínica Kateli',
    description:
      'Projeto construído em WordPress, HTML, CSS e Javascript. Este site conta com um design elegante e refinado, atendendo aos mais altos padrões e gostos. Fique por dentro dos detalhes',
    image: Kateli,
    urlSite: 'http://katelisaude.com.br/',
  },
];

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
            {projectsList.map((project) => (
              <div className='project col-5' key={project.name}>
                <img src={project.image} alt='' className='thefront' />
                <div className='theback'>
                  <h3>{project.name}</h3>
                  <p>
                    {project.description}{' '}
                    <a href={project.urlSite} target='_blank' rel='noreferrer'>
                      visitando o site
                    </a>
                    {project.urlGithub ? (
                      <>
                        {' '}
                        e{' '}
                        <a
                          href={project.urlGithub}
                          target='_blank'
                          rel='noreferrer'
                        >
                          analisando o código
                        </a>
                        .
                      </>
                    ) : (
                      <>.</>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
