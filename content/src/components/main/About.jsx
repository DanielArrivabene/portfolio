import '../../styles/components/About.scss';

import Avatar from '../../assets/eu6.jpg';

function About() {
  return (
    <section id='about' className='min-vh-100 mt-5 d-flex justify-content-around'>
      <article className='container d-flex align-items-center'>
        <div className='row'>
          <div className='col-md-6 text-center avatar__container'>
            <img className="avatar" src={Avatar} alt='Daniel Goulart Arrivabene' />
          </div>
          <div className='col-md-5 description'>
            <h2 className='description__title'>
              Buscando por serviços de desenvolvimento web? Eu posso te ajudar!
            </h2>
            <p className='description__text'>
              Olá, Meu nome é <strong>Daniel Goulart Arrivabene</strong> e sou
              um desenvolvedor apaixonado por construir aplicativos da web de
              alto nível e com funcionalidades intuitivas. Atuo transformando
              ideias em realidade usando soluções criativas, sempre em busca de
              novas habilidades, ferramentas e conceitos.{' '}
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
