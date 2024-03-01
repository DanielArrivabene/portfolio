import '../../styles/components/Projects.scss';

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
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default Projects;
