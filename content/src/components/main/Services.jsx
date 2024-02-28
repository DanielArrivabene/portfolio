import '../../styles/components/Services.scss';

import { HiOutlinePaintBrush } from 'react-icons/hi2';
import { LuCode2 } from 'react-icons/lu';
import { VscDeviceMobile } from 'react-icons/vsc';
import { HiArrowLongRight } from 'react-icons/hi2';

function Services() {
  const servicesList = [
    {
      title: 'UX / UI Design',
      subitle: 'New',
      description: 'Criação de interfaces digitais animações únicas.',
      icon: <HiOutlinePaintBrush />,
    },
    {
      title: 'Web Development',
      subitle: 'Most popuplar',
      description: 'Desenvolvimento de sites e sistemas customizados.',
      icon: <LuCode2 />,
    },
    {
      title: 'Optimizations',
      subitle: 'business',
      description: 'Melhorias e soluções em websites já existentes.',
      icon: <VscDeviceMobile />,
    },
  ];

  return (
    <section
      id='services'
      className='d-flex justify-content-around section-area'
    >
      <article className='container d-flex flex-column align-items-center justify-content-center'>
        <h2 className='mb-3'>Serviços</h2>
        <p className='fst-italic mb-3 services__subtitle'>
          ´´Com grandes responsabilidades vem grandes poderes´´
        </p>
        <div className='services_container row justify-content-between mt-5'>
          {servicesList.map((service, index) => (
            <div key={index} className='service p-0'>
              <div className='service__data_container p-4'>
                {service.icon}
                <h3 className='service__title mb-4'>{service.title}</h3>
                <p className='service__description mb-4'>
                  {service.description}
                </p>
                <a href='#contact' className='service__link'>
                  SAIBA MAIS{' '}
                  <span>
                    <HiArrowLongRight />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Services;
