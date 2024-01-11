import '../../styles/components/About.scss';

function About() {
  return (
    <section id='about' className='min-vh-100 d-flex justify-content-around'>
      <article className='container d-flex align-items-center'>
        <div className='row justify-content-center gap-3'>
          <div className='col-lg-5 text-center avatar__container'>
            <div className="avatar"></div>
          </div>
          <div className='col-lg-5 description'>
            <h2 className='description__title'>
              Buscando por serviços de desenvolvimento web? <br/> Eu posso te ajudar!
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
