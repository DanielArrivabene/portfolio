import '../../styles/components/Hero.scss';

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
        <h1 className='text-center hero__title mb-3'>
          Websites feitos <br /> sob Medida
        </h1>
        <p className='mb-4 hero__text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          necessitatibus.
        </p>
        <div className='hero__links_container'>
          <a href='#' className='hero__link'>
            Começar agora
          </a>
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
