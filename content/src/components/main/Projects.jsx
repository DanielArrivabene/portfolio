import '../../styles/components/Projects.scss';

const projectsList = [
  {
    name: 'Clínica Kateli',
    class: 'kateli',
    status: 'new',
    description:
      'Projeto construído em WordPress, HTML, CSS e Javascript. Este site conta com um design elegante e refinado, atendendo aos mais altos padrões e gostos.',
    urlSite: 'http://katelisaude.com.br/',
  },
  {
    name: 'Clínica Kateli',
    class: 'kateli',
    status: 'new',
    description:
      'Projeto construído em WordPress, HTML, CSS e Javascript. Este site conta com um design elegante e refinado, atendendo aos mais altos padrões e gostos.',
    urlSite: 'http://katelisaude.com.br/',
  },
  {
    name: 'Repara',
    class: 'repara',
    description:
      'Projeto construído em HTML, Bootstrap, CSS, Sass, Javascript e React. Com foco em apresentar a empresa ao público alvo e atrair clientes, Repara! conta com uma identidade visual única, intuitiva e dinâmica.',
    urlSite: 'https://repara-tec.vercel.app/',
  },
  {
    name: 'Clínica Kateli',
    class: 'kateli',
    status: 'new',
    description:
      'Projeto construído em WordPress, HTML, CSS e Javascript. Este site conta com um design elegante e refinado, atendendo aos mais altos padrões e gostos.',
    urlSite: 'http://katelisaude.com.br/',
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
              <a
                href={project.urlSite}
                target='_blank'
                rel='noreferrer'
                className='project__link'
              >
                <h3 className='project__title'>{project.name}</h3>
              </a>
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
