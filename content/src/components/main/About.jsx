import '../../styles/components/About.scss';

import { MdCheckBox } from 'react-icons/md';

function About() {
  const aboutAtributesList = [
    {
      atribute: 'Total disponibilidade',
    },
    {
      atribute: 'Total disponibilidade',
    },
    {
      atribute: 'Total disponibilidade',
    },
  ];

  return (
    <section
      id='about'
      className='d-flex justify-content-around section-area min-vh-100'
    >
      <article className='container row'>
        <div className='col-lg-6 about__data'>
          <h2>Um pouco sobre o que faço</h2>
          <p className='about__text mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            accusamus deserunt aperiam quas, iste eaque nulla praesentium nihil
            quod, libero porro. Consectetur fuga saepe dignissimos molestias
            accusamus similique voluptatum suscipit.
          </p>
          <a href='#' className='about__link mb-5'>
            Fale comigo
          </a>
          <ul className='about__list p-0'>
            {aboutAtributesList.map((item, index) => (
              <li key={index} className="mb-2 d-flex align-items-center gap-1">
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
