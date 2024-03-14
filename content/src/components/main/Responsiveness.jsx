import '../../styles/components/Responsiveness.scss';

import Image from '../../assets/responsiviness.png';

function Responsiveness() {
  return (
    <section id='responsiveness' className='section-area'>
      <article className='container d-flex flex-column align-items-center'>
        <p className='color--primary mb-1'>A IMPORTÂNCIA DA</p>
        <h2 className='responsiveness_title mb-4'>Responsividade</h2>
        <div className='responsiveness_container row flex-wrap w-100 mb-4'>
          <div className='col-lg-6 p-4'>
            <h3 className='mb-3'>O que é Responsividade?</h3>
            <p className='responsiveness__text'>
              Com toda a tecnologia atual, cada vez mais as pessoas acessam
              sites por meio de seus smartphones e tablets.{' '}
              <strong>Responsividade</strong> é a{' '}
              <strong>
                capacidade do site se adequar a diferentes tamanhos de telas.
              </strong>
            </p>
            <p className='responsiveness__text'>
              Assim é possível acessar o conteúdo de forma muito mais prática;
              as informações ficam muito mais claras e a experiência de
              navegação do usuário muito mais agradável.
            </p>
            <p className='responsiveness__text'>
              Por sorte, todos os sites que desenvolvemos são responsivos,{' '}
              <a href='#'>Faça um orçamento agora.</a>
            </p>
            <h3 className='mb-3'>O que você ganha com isso?</h3>
            <p className='responsiveness__text'>
              De acordo com os dados da <a href='#'>Target Group Index</a> , os
              acessos via celulares representam cerca de{' '}
              <strong>64% entre os usuários</strong>.
            </p>
            <p className='responsiveness__text'>
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
            <p className='color--primary'>
              Dessa forma fica evidente a importância da Responsividade no seu
              Website.
            </p>
          </div>
          <div className='responsiveness__image_container col-lg-6 p-4'>
            <img className='responsiveness__image' src={Image} alt='' />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Responsiveness;
