import '../../styles/components/Services.scss';

import { HiArrowLongRight } from 'react-icons/hi2';

function Services() {
  const servicesList = [
    {
      title: 'UX / UI Design',
      subitle: 'New',
      description: 'Criação de interfaces digitais animações únicas.',
      icon: '01',
    },
    {
      title: 'Web Development',
      subitle: 'Most popuplar',
      description: 'Desenvolvimento de sites e sistemas customizados.',
      icon: '02',
    },
    {
      title: 'Optimizations',
      subitle: 'business',
      description: 'Melhorias e soluções em websites já existentes.',
      icon: '03',
    },
  ];

  return (
    <article id='services' className='row justify-content-between container'>
      {servicesList.map((service, index) => (
        <div key={index} className='service p-0'>
          <div className='service__data_container p-4'>
            <p className='service__icon mb-5 mt-3'>{service.icon}</p>
            <h3 className='service__title mb-2'>{service.title}</h3>
            <p className='service__description mb-5'>{service.description}</p>
            <a href='#contacts' className='service__link'>
              Saiba mais <HiArrowLongRight />
            </a>
          </div>
        </div>
      ))}
    </article>
  );
}

export default Services;
