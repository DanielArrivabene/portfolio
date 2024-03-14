import '../../styles/components/Ideal.scss';

import Image from '../../assets/responsiviness.png';

function Ideal() {
  return (
    <section id='ideal' className='section-area'>
      <article className='container d-flex flex-column align-items-center'>
        <p className='color--primary mb-1'>EM BUSCA DO</p>
        <h2 className='ideal_title mb-4'>Seu site ideal</h2>
        <div className='ideal_container row flex-wrap w-100 mb-4'>
          <div className='col-lg-6 p-4'>
            <p className='ideal__text  mb-3'>
              Sem um site profissional sua empresa é <strong>invisível</strong>{' '}
              para milhares de pessoas que buscam pelo seu serviço todos os dias
              na internet.
            </p>
            <p className='ideal__text mb-5'>
              Ter um site permite que <strong>clientes em potencial</strong>{' '}
              encontrem sua empresa facilmente ao procurar por serviços
              relacionados, além de passar uma imagem de{' '}
              <strong>credibilidade</strong> para sua empresa. Os clientes
              tendem a confiar mais em empresas que têm uma presença online
              estabelecida.
            </p>
            <h3 className='mb-3'>O que você ganha com isso?</h3>
            <p className='ideal__text'>
              De acordo com os dados da <a href='#'>Target Group Index</a> , os
              acessos via celulares representam cerca de{' '}
              <strong>64% entre os usuários</strong>.
            </p>
            <p className='ideal__text'>
              {' '}
              De acordo com a{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://hoodzpahdesign.com/'
              >
                Hoodzpah Design
              </a>
              , 54% dos usuários de internet se sentem frustrados ao acessar um
              site que não é <strong>responsivo</strong>. E{' '}
              <strong>52% dos usuários</strong> disseram que seriam menos
              propensos a se envolver com uma empresa caso a experiência com seu
              website não fosse boa.
            </p>
            <a href='#atributes' className='ideal__link mb-4'>
              Veja as vantagens
            </a>
          </div>
          <div className='ideal__image_container col-lg-6 p-4'>
            <img className='ideal__image' src={Image} alt='' />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Ideal;
