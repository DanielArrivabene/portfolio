import '../../styles/components/Hero.scss';
import BtnPrimary from '../Buttons/BtnPrimary';


function Hero() {
  return (
    <section
      id='home'
      className='d-flex 
    flex-column
    justify-content-center align-items-center'
    >
      <article
        className='container d-flex 
      flex-column
      justify-content-center align-items-center'
      >
        <h1 className='text-center hero__title mb-4'>
          <span className="one">Websites</span> feitos <br />
          sob <span className="two">medida</span>
        </h1>
        <p className='mb-4 text-center hero__text'>
          Desenvolvimento de websites profissionais para elevar sua presença,
          especializados em produtividade responsividade e SEO.
        </p>
        <div className='hero__links_container'>
          <BtnPrimary text={'Iniciar Desenvolvimento'} target={'#contact'} />
          <p className='hero__clients m-0'>
            <span>+50</span> <br />
            Clientes satisfeitos
          </p>
        </div>
      </article>
    </section>
  );
}

export default Hero;
