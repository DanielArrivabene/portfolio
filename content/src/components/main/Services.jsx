import '../../styles/components/Services.scss';

import WebDev from '../../assets/site-dev.jpg';
import AppDev from '../../assets/app-dev.jpg';
import DesignDev from '../../assets/design-dev.jpg';

function Services() {
  const servicesList = [
    {
      title: 'Web Development',
      description: 'Desenvolvimento de sites e sistemas customizados.',
      image: WebDev,
    },
    {
      title: 'UX / UI Design',
      description: 'Desenvolvimento de sites e sistemas customizados.',
      image: DesignDev,
    },
    {
      title: 'Performace Optimization',
      description: 'Desenvolvimento de sites e sistemas customizados.',
      image: AppDev,
    },
    {
      title: 'Mobile App',
      description: 'Desenvolvimento de sites e sistemas customizados.',
      image: AppDev,
      aviso: 'Em breve',
    },
  ];

  return (
    <section
      id='services'
      className='d-flex justify-content-around section-area'
    >
      <article className='container d-flex flex-column align-items-center justify-content-center'>
        <h2 className='mb-3'>Serviços</h2>
        <p className='fst-italic'>
          ´´Com grandes responsabilidades vem grandes poderes´´
        </p>
        <div className='services_container mt-5'>
          {servicesList.map((service, index) => (
            <div key={index} className='service p-4'>
              <h3>{service.title}</h3>
              <p className='m-0'>{service.description}</p>
              {service.aviso && <span className="service__aviso">{service.aviso}</span>}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Services;
