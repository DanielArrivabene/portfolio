import '../../styles/components/Projects.scss';

//import Clients from './Clients';

import Kateli from '../../assets/Kateli.png';
import Repara from '../../assets/Repara.png';
import Your from '../../assets/your.jpg';

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
    name: 'Repara',
    class: 'repara',
    urlSite: 'https://repara-tec.vercel.app/',
    image: Repara,
  },
  {
    name: 'Seu Projeto',
    class: 'your',
    urlSite: '#contact',
    target: '_self',
    image: Your,
  },
  {
    name: 'Seu Projeto',
    class: 'your',
    urlSite: '#contact',
    target: '_self',
    image: Your,
  },
  {
    name: 'Seu Projeto',
    class: 'your',
    urlSite: '#contact',
    target: '_self',
    image: Your,
  },
];

function Projects() {
  return (
    <section
      id='projects'
      className='min-vh-100 d-flex flex-column align-items-center section-area px-0'
    >
      <article className='container'>
        <h2 className='text-center'>Portfólio</h2>
        <p className='text-center mb-4'>
          Confira alguns dos projetos já realizados.
        </p>
        <div className='projects__container row flex-wrap mb-4'>
          {projectsList.map((project) => (
            <div className='project col-lg-4 px-4 mb-4' key={project.name}>
              <img
                src={project.image}
                alt={project.name}
                className='project__image mb-2'
              />
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
