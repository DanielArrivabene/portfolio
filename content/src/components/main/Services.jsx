import '../../styles/components/Services.scss';

function Services() {
  const servicesList = [
    {
      title: 'Web Development',
      description: 'Desenvolvimento de sites e sistemas customizados.',
    },
    {
      title: 'UX / UI Design',
      description: 'Desenvolvimento de sites e sistemas customizados.',
    },
    {
      title: 'Performace Optimization',
      description: 'Desenvolvimento de sites e sistemas customizados.',
    },
    {
      title: 'Mobile App',
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
        <p className='fst-italic mb-5'>
          ´´Com grandes responsabilidades vem grandes poderes´´
        </p>
        <div className='services_container row justify-content-between'>
          {servicesList.map((service, index) => (
            <div key={index} className='service p-4'>
              <h3 className='service__title'>{service.title}</h3>
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
