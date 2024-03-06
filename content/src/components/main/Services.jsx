import '../../styles/components/Services.scss';

import { HiArrowLongRight } from 'react-icons/hi2';

function Services() {
  const servicesList = [
    {
      title: 'Web Development',
      description:
        'Desenvolvimento de sites sob medida e totalmente personalizados.',
      icon: '01',
    },
    {
      title: 'Sob medida',
      description:
        'Cada site é desenvolvido unicamente para a solução que você precisa.',
      icon: '02',
    },
    {
      title: 'Com SEO',
      description:
        'Alta visibilidade e acessibilidade, fazendo mais pessoas virem até você.',
      icon: '03',
    },
  ];

  return (
    <section id='services' className='d-flex flex-column align-items-center'>
      <article className='container row justify-content-between'>
        {servicesList.map((service, index) => (
          <div key={index} className='service p-0'>
            <div className='service__data_container'>
              <h3 className='service__title mb-4'>{service.title}</h3>
              <p className='service__description mb-2'>{service.description}</p>
              <a href='#contact' className='service__link'>
                Saiba mais <HiArrowLongRight />
              </a>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Services;
