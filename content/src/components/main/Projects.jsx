import '../../styles/components/Projects.scss';

//import Clients from './Clients';

import Kateli from '../../assets/Kateli.png';
import Repara from '../../assets/Repara.png';

const projectsList = [
  {
    name: 'Repara',
    class: 'repara',
    urlSite: 'https://repara-tec.vercel.app/',
    image: Repara,
  },
  {
    name: 'Clínica Kateli',
    class: 'kateli',
    urlSite: 'http://katelisaude.com.br/',
    image: Kateli,
  },
  {
    name: 'Repara 2',
    class: 'repara',
    urlSite: 'https://repara-tec.vercel.app/',
    image: Repara,
  },
];

function Projects() {
  return (
    <section id='projects' className='min-vh-100 section-area px-0'>
      <article className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='text-center mb-2 projects__title'>Portfólio</h2>
        <p className='text-center mb-5'>
          Confira alguns dos projetos já realizados.
        </p>
        <div className='projects__container d-flex justify-content-between flex-wrap mb-4'>
          {projectsList.map((project) => (
            <div className={`project mb-4 ${project.class}`} key={project.name}>
              <a
                href={project.urlSite}
                target={project.target ? project.target : '_blank'}
                rel='noreferrer'
                className='project__link'
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className='project__image'
                />
              </a>
            </div>
          ))}
        </div>
        <div className='projects__links_container d-flex justify-content-center gap-4 align-items-center'>
          <a href='#' className='projects__link--one'>
            Chamada de atenção
          </a>
          <a href='#' className='projects__link--two'>
            Chamada de algo
          </a>
        </div>
      </article>
    </section>
  );
}

export default Projects;
