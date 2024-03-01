import '../../styles/components/About.scss';

function About() {
  return (
    <section
      id='about'
      className='d-flex justify-content-around section-area min-vh-100'
    >
      <article className='container d-flex flex-column align-items-center justify-content-center'>
        <p className='description__text mb-3'>
          Me chamo <span className='destaque--text'>Daniel Goulart</span>,
          estou a mais de 3 anos transformando ideias em realidade. Tudo através de código e uma boa xícara de
          café.
        </p>
        <div className='about__links_container'>
          <a className='description__link' href='#services'>
            Entrar em Contato
          </a>
          <a className='description__link' href='#services'>
            Ver projetos
          </a>
        </div>
      </article>
    </section>
  );
}

export default About;
