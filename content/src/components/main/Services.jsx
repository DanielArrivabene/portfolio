import '../../styles/components/Services.scss';

function Services() {
  const servicesList = [
    {
      title: 'Web Development',
      description: 'Desenvolvimento de sites e sistemas customizados.',
    },
    {
      title: 'Web Design',
      description: 'Desenvolvimento de sites e sistemas customizados.',
    },
    {
      title: 'App Development',
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
        <p className='fst-italic'>
          ´´Com grandes responsabilidades vem grandes poderes´´
        </p>
        <div className='row justify-content-between align-items-center services_container mt-5'>
          {servicesList.map((service, index) => (
            <div key={index} className='service col-lg-4 p-1'>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Services;
