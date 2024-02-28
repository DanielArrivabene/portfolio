import '../../styles/components/Services.scss';

import { HiOutlinePaintBrush } from 'react-icons/hi2';
import { LuCode2 } from 'react-icons/lu';
import { VscDeviceMobile } from 'react-icons/vsc';

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
    <article
      id='services'
      className='row justify-content-between container'
    >
      {servicesList.map((service, index) => (
        <div key={index} className='service p-0'>
          <div className='service__data_container p-4'>
            {service.icon}
            <h3 className='service__title mb-2'>{service.title}</h3>
            <p className='service__description mb-2'>{service.description}</p>
          </div>
        </div>
      ))}
    </article>
  );
}

export default Services;
