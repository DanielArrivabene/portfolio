import '../../styles/components/Atributes.scss';

function Atributes() {
  return (
    <section
      id='atributes'
      className='d-flex justify-content-around section-area'
    >
      <article className='container row justify-content-between align-items-center'>
        <div className='col-lg-6 atributes__container d-flex flex-wrap gap-4'>
          <div className='atribute one p-4 d-flex justify-content-between align-items-center'>
            <h3 className='atribute__service m-0'>
              Escalável
            </h3>
            <h3 className='atribute__service m-0'>
              Responsivo
            </h3>
            <h3 className='atribute__service m-0'>
              Rápido
            </h3>
          </div>
          <div className='atribute two p-4'>
            <h3>
              Título genérico top Título genérico top Título genérico top Título
              genérico top Título genérico top Título genérico top
            </h3>
          </div>
          <div className='atribute tree p-4 d-flex flex-column justify-content-between'>
            <p className='mb-2'>
              ´´Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti, quae vero, perferendis ipsum quos totam aperiam´´
              <strong className='mt-2 d-block'>Por Patrick Mendes</strong>
            </p>
            <a href='#testemonials' className='atribute__link'>
              Ver mais
            </a>
          </div>
        </div>
        <div className='col-lg-6 atributes__data'>
          <h2 className='mb-3'>Por quê usar meu serviço</h2>
          <p className='atributes__text mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            accusamus deserunt aperiam quas
          </p>
          <p className='atributes__text mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            accusamus deserunt aperiam quas
          </p>
          <a href='#' className='atributes__link mb-2'>
            Saiba mais
          </a>
          <p className="atributes_call">*Faça um orçamento, é grátis!</p>
        </div>
      </article>
    </section>
  );
}

export default Atributes;
