import '../../styles/components/About.scss';

import { MdCheckBox } from 'react-icons/md';

function About() {
  const aboutAtributesList = [
    {
      atribute: 'Total suporte 24hr.',
    },
    {
      atribute: 'Web Design incluso.',
    },
    {
      atribute: 'Livre para personalizar.',
    },
  ];

  return (
    <section
      id='about'
      className='d-flex justify-content-around section-area min-vh-100'
    >
      <article className='container row'>
        <div className='col-lg-6 d-flex flex-column justify-content-between about__data'>
          <div className='about__text_container'>
            <p className="color--primary">LOREM YPSULUM DOLOR</p>
            <h2 className='mb-3'>Seu site ideal</h2>
            <p className='about__text mb-4'>
              Sem um site profissional sua empresa é <strong>invisível</strong>{' '}
              para milhares de pessoas que buscam pelo seu serviço todos os dias
              na internet.
            </p>
            <p className='about__text mb-4'>
              Ter um site permite que <strong>clientes em potencial</strong>{' '}
              encontrem sua empresa facilmente ao procurar por serviços
              relacionados, além de passar uma imagem de{' '}
              <strong>credibilidade</strong> para sua empresa. Os clientes
              tendem a confiar mais em empresas que têm uma presença online
              estabelecida.
            </p>
            <a href='#atributes' className='about__link mb-5'>
              Veja as vantagens
            </a>
          </div>
          <ul className='about__list p-0'>
            {aboutAtributesList.map((item, index) => (
              <li key={index} className='mb-2 d-flex align-items-center gap-1'>
                <MdCheckBox />
                {item.atribute}
              </li>
            ))}
          </ul>
        </div>
        <div className='col-lg-6 about__image'></div>
      </article>
    </section>
  );
}

export default About;
