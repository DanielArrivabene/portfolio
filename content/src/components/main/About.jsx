import '../../styles/components/About.scss';

import { MdCheckBox } from 'react-icons/md';

import Avatar from '../../assets/eu.png';

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
            <p className='color--primary mb-2'>QUEM SOU?</p>
            <h2 className='mb-4'>A mente por trás da máscara</h2>
            <p className='about__text  mb-3'>
              Satisfação! Me chamo <strong>Daniel Goulart Arrivabene</strong>, eu
              atuo como Web Developer e Designer a mais de 4 anos; além de ter uma forte paixão por música e milkshake.
            </p>
            <p className='about__text mb-4'>
             Durante esses anos desenvolvi websites dos mais diversos tipos, com diversos clientes satisfeitos e tudo mais, Total satisfação garantida, agilidade, o processo de desenvolvimento é um conjunto entre mim e você para obter o resultado desejado, faça um orçamento gratuito ou continue navegando pelo site para saber mais. 
            </p>
            <a href='#atributes' className='about__link mb-4'>
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
        <div className='col-lg-6 about__image_container'>
          <img
            src={Avatar}
            alt='Daniel Goulart Arrivabene'
            className='about__image'
          />
        </div>
      </article>
    </section>
  );
}

export default About;
