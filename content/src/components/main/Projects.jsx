import '../../styles/components/Projects.scss';

import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi';

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
    name: 'Repara',
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
      className='min-vh-100 d-flex flex-column align-items-center section-area'
    >
      <h2 className='text-center'>Portfólio</h2>
      <p className='text-center mb-5'>
        Confira alguns dos projetos já realizados.
      </p>
      <article className='projects__container'>
        {projectsList.map((project) => (
          <div
            className={`project ${project.order} ${project.class}`}
            key={project.name}
          >
            <div className='project__data p-5'>
              <h3 className='project__title mb-4'>{project.name}</h3>
              <div className='project__links_container d-flex gap-3'>
                <a
                  href={project.urlSite}
                  target='_blank'
                  rel='noreferrer'
                  className='project__link'
                >
                  <BiLinkExternal />
                </a>
                {project.urlGithub && (
                  <a
                    href={project.urlGithub}
                    target='_blank'
                    rel='noreferrer'
                    className='project__link'
                  >
                    <BiLogoGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Projects;
