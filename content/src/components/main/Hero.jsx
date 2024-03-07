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
        <h1 className='text-center hero__title mb-4'>Websites feitos</h1>
        <h1 className='text-center hero__title mb-4'>
          sob <span>medida</span>
        </h1>
        <p className='mb-4 text-center hero__text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit cupiditate
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
