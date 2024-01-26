import '../../styles/components/About.scss';

import Avatar from '../../assets/eu.jpg'

function About() {
  return (
    <section id='about' className='d-flex justify-content-around section-area'>
      <article className='container d-flex align-items-center justify-content-center'>
        <div className='row justify-content-center'>
          <div className="col-lg-4 d-flex justify-content-end avatar__container">
            <img src={Avatar} alt="Daniel Goulart Arrivabene" loading='lazy'/>
          </div>
          <div className='col-lg-7 description'>
            <h2 className='description__title'>
              Buscando por serviços de desenvolvimento web?<br/> Eu posso te ajudar<span className="destaque--text">!</span>
            </h2>
            <p className='description__text'>
              Olá! Meu nome é <strong>Daniel Goulart Arrivabene</strong>, eu sou
              um desenvolvedor apaixonado por construir sites da web de
              alto nível. Atuo transformando ideias em realidade usando soluções criativas, sempre em busca de novas habilidades, ferramentas e conceitos.{' '}
            </p>
            <a className='description__link' href='#technologies'>
              Ver Skills
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
