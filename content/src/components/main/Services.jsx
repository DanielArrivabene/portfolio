import '../../styles/components/Services.scss';

function Services() {
  const servicesList = [
    {
      title: 'Web Development',
      subitle: 'MOST POPULAR',
      description: 'Desenvolvimento de sites e sistemas customizados.',
    },
    {
      title: 'UX / UI Design',
      subitle: 'NEW',
      description: 'Desenvolvimento de sites e sistemas customizados.',
    },
    {
      title: 'Performace Optimization',
      subitle: 'BUSINESS',
      description: 'Desenvolvimento de sites e sistemas customizados.',
    },
    {
      title: 'Mobile App',
      subitle: 'COMING SOON',
      description: 'Desenvolvimento de sites e sistemas customizados.',
    },
  ];

  return (
    <section
      id='services'
      className='d-flex justify-content-around section-area'
    >
      <article className='container d-flex flex-column align-items-center justify-content-center'>
        <h2 className='mb-3'>Serviços</h2>
        <p className='fst-italic mb-3'>
          ´´Com grandes responsabilidades vem grandes poderes´´
        </p>
        <div className='services_container row justify-content-between mt-3'>
          {servicesList.map((service, index) => (
            <div key={index} className='service p-4'>
              <p className='service__subtitle mb-4'>{service.subitle}</p>
              <h3 className='service__title mb-2'>{service.title}</h3>
              <p className='m-0 service__description'>{service.description}</p>
              {service.aviso && (
                <span className='service__aviso'>{service.aviso}</span>
              )}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Services;
