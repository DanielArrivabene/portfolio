import '../../styles/components/Ideal.scss';

import Image from '../../assets/responsiviness.png';

function Ideal() {
  return (
    <section id='ideal' className='section-area'>
      <article className='container d-flex flex-column align-items-center'>
        <h2 className='ideal_title mb-4'>Seu site <span className="color--primary">ideal</span></h2>
        <div className='ideal_container row flex-wrap-reverse w-100'>
          <div className='col-lg-6 p-4'>
            <p className='ideal__text mb-3'>
              Ter um site permite que <strong>clientes em potencial</strong>{' '}
              encontrem sua empresa facilmente ao procurar por serviços
              relacionados, além de passar uma imagem de{' '}
              <strong>credibilidade</strong>. Os clientes tendem a confiar mais
              em empresas que têm uma presença online estabelecida.
            </p>
            <p className='ideal__text  mb-5'>
              Sem um site profissional sua empresa é invisível para milhares de
              pessoas que buscam pelo seu serviço{' '}
              <strong>todos os dias na internet.</strong>
            </p>
            <h3 className='mb-3'>Como escolher o site ideal?</h3>
            <p className='ideal__text'>
              De acordo com a{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://hoodzpahdesign.com/'
              >
                Hoodzpah Design
              </a>{' '}
              52% dos usuários disseram que seriam menos propensos a se envolver
              com uma empresa caso a experiência com seu website não fosse boa.
            </p>
            <p className='ideal__text mb-4'>
              O processo de desenvolvimento conta com várias estapas, e sem
              dúvidas durante todas o foco na <strong>sua necessidade</strong>,
              sendo assim, para alcançar o resultado esperado é essencial a
              colaboração e
            </p>
            <a href='#atributes' className='ideal__link'>
              Veja as vantagens
            </a>
          </div>
          <div className='ideal__image_container col-lg-6 p-4'>
            <img className='ideal__image mb-5' src={Image} alt='' />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Ideal;
