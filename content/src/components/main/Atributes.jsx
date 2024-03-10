import '../../styles/components/Atributes.scss';

function Atributes() {
  const atributesList = [
    {
      name: 'Visibilidade Online',
    },
    {
      name: 'Credibilidade',
    },
    {
      name: 'Acesso 24/7',
    },
    {
      name: 'Marketing Eficiente',
    },
    {
      name: 'Comunicação Direta',
    },
    {
      name: 'Expansão de Mercado',
    },
    {
      name: 'Competitividade',
    },
    {
      name: 'Integração com Redes Sociais',
    },
    {
      name: 'Facilidade de Contato',
    },
    {
      name: 'Facilidade de Atualização',
    },
  ];

  return (
    <section
      id='atributes'
      className='d-flex justify-content-around section-area'
    >
      <article className='container row justify-content-between align-items-center'>
        <ul className='col-lg-6 atributes__container d-flex flex-wrap gap-4'>
          {atributesList.map((item, index) => (
            <li className='atribute' key={index}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        <div className='col-lg-6 atributes__data'>
          <h2 className='mb-3'>Vantagens de ter um site</h2>
          <p className='atributes__text mb-3'>
            Ao iniciar o processo você não recebe apenas um site, também fica
            por dentro de estratégias para atrair mais visitantes, dicas sobre
            como vender mais e um treinamento sobre como gerenciar seu website.
          </p>
          <p className='atributes__text mb-3'>
            Está na hora de dar o próximo passo nessa jornada!
          </p>
          <a href='#contact' className='atributes__link mb-2'>
            Começar agora
          </a>
          <p className='atributes_call'>*Faça um orçamento, é grátis!</p>
        </div>
      </article>
    </section>
  );
}

export default Atributes;
