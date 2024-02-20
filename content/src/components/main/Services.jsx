import '../../styles/components/Services.scss';

function Services() {
  const servicesList = [
    {
      title: 'UX / UI Design',
      subitle: 'NEW',
      description: 'Criação de interfaces e experiencias digitais únicas.',
    },
    {
      title: 'Web Development',
      subitle: 'MOST POPULAR',
      description: 'Desenvolvimento de sites e sistemas customizados.',
    },
    {
      title: 'Optimizations',
      subitle: 'BUSINESS',
      description: 'Melhorias e soluções em websites já existentes.',
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
        <div className='services_container row justify-content-center mt-4'>
          {servicesList.map((service, index) => (
            <div key={index} className='service p-0'>
              <div className='service__data_container p-4'>
                <p className='service__subtitle mb-4'>{service.subitle}</p>
                <h3 className='service__title mb-2'>{service.title}</h3>
                <p className='service__description mb-1'>
                  {service.description}
                </p>
                <a href='#contact' className='service__link'>
                  Saiba mais
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
