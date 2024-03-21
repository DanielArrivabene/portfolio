import '../../styles/components/Atributes.scss';

import BtnPrimary from '../Buttons/BtnPrimary';

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
      <article className='container row flex-wrap-reverse justify-content-between align-items-center'>
        <ul className='col-lg-6 atributes__container d-flex flex-wrap gap-4 p-3'>
          {atributesList.map((item, index) => (
            <li className='atribute p-3' key={index}>
              <p className='m-0'>{item.name}</p>
            </li>
          ))}
        </ul>
        <div className='col-lg-6 px-4 atributes__data'>
          <p className='color--primary mb-2'>A VISIBILIDADE QUE VOCÊ MERECE</p>
          <h2 className='mb-4'>Vantagens de ter um site</h2>
          <p className='atributes__text mb-3'>
            Sem um site profissional sua empresa é <strong>invisível</strong>{' '}
            para milhares de pessoas que buscam pelo seu serviço todos os dias
            na internet.
          </p>
          <p className='atributes__text mb-3'>
            Ter um site permite que clientes em potencial{' '}
            <strong>encontrem sua empresa</strong> facilmente ao procurar por
            serviços relacionados, além de passar uma imagem de{' '}
            <strong>credibilidade</strong>. Os clientes tendem a confiar mais em
            empresas que têm uma presença online estabelecida.
          </p>
          <p className='atributes__text mb-4'>
            <strong>Está na hora de dar o próximo passo nessa jornada!</strong>
          </p>
          <BtnPrimary text={'Começar agora'} target={'#contact'} />
          <p className='atributes_call mt-2'>*Faça um orçamento, é grátis!</p>
        </div>
      </article>
    </section>
  );
}

export default Atributes;
