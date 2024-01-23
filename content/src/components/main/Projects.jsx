import '../../styles/components/Projects.scss';

import Repara from '../../assets/repara.png';
import Kateli from '../../assets/Kateli.png';

const projectsList = [
  {
    name: 'Clínica Kateli',
    class: 'kateli',
    status: 'new',
    description:
      'Projeto construído em WordPress, HTML, CSS e Javascript. Este site conta com um design elegante e refinado, atendendo aos mais altos padrões e gostos.',
    image: Kateli,
    urlSite: 'http://katelisaude.com.br/',
    order: 'order-0',
  },
  {
    name: 'Repara!',
    class: 'repara',
    description:
      'Projeto construído em HTML, Bootstrap, CSS, Sass, Javascript e React. Com foco em apresentar a empresa ao público alvo e atrair clientes, Repara! conta com uma identidade visual única, intuitiva e dinâmica.',
    image: Repara,
    urlGithub: 'https://github.com/DanielArrivabene/repara',
    urlSite: 'https://repara-tec.vercel.app/',
    order: 'order-2',
  },
];

function Projects() {
  return (
    <section
      id='projects'
      className='min-vh-100 d-flex align-items-center section-area'
    >
      <div className='container'>
        <h2 className='text-center'>
          Confira alguns dos projetos já realizados
        </h2>
        <article className='projects__container'>
          <div className='row justify-content-center'>
            {projectsList.map((project) => (
              <div className='project col-sm-5' key={project.name}>
                <div
                  className={`project__image_container ${project.order} ${project.class}`}
                >
                  <img
                    src={project.image}
                    alt='project image'
                    className='project__image'
                    loading='lazy'
                  />
                  {project.status && (
                    <span className='project__status rounded-pill'>
                      {project.status}
                    </span>
                  )}
                </div>
                <div className='project__text_container'>
                  <h3 className={`project__title ${project.class}`}>
                    {project.name}
                  </h3>
                  <p className='project__description'>{project.description}</p>
                  <div className='project__links_container'>
                    <a
                      href={project.urlSite}
                      target='_blank'
                      rel='noreferrer'
                      className='project__link'
                    >
                      <span>Visitar</span>
                    </a>
                    {project.urlGithub && (
                      <a
                        href={project.urlGithub}
                        target='_blank'
                        rel='noreferrer'
                        className='project__link'
                      >
                        <span>Github</span>
                      </a>
                    )}
                  </div>
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
