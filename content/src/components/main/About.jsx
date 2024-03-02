import '../../styles/components/About.scss';

import Atributes from './Atributes';

function About() {
  return (
    <section
      id='about'
      className='d-flex justify-content-around section-area min-vh-100'
    >
      <article className='container d-flex flex-column align-items-center justify-content-center'>
        <p className='description__text mb-4 text-center'>
          A mais de <span className='destaque--text'>3 anos</span> transformando
          ideias em realidade. <br />{' '}
          Tudo através de código e uma boa xícara de café.
        </p>
        <Atributes />
        <div className='about__links_container mt-2'>
          <a className='about__link--one' href='#contact'>
            Ver Contatos
          </a>
          <a className='about__link--two' href='#projects'>
            Ver projetos
          </a>
        </div>
      </article>
    </section>
  );
}

export default About;
