import '../../styles/components/Projects.scss';

import Repara from '../../assets/repara.png';
import Mentalize from '../../assets/mentalize.png';

function Projects() {
  return (
    <section id='projects' className='min-vh-100 d-flex align-items-center'>
      <div className='container'>
        <h2 className='text-center'>
          Confira alguns dos projetos já realizados
        </h2>
        <article className='projects__container'>
          <div className='row justify-content-center'>
            <div className='col-6 project__image'>
              <img src={Repara} alt='Repara!' loading='lazy' />
            </div>
            <div className='col-5 project__description'>
              <h3>Repara!</h3>
              <p>
                Projeto construído em HTML, Bootstrap, CSS, Sass, Javascript e
                React. Com foco em apresentar a empresa ao público alvo e atrair
                clientes, Repara! conta com uma identidade visual única,
                intuitiva e dinâmica. Fique por dentro dos detalhes{' '}
                <a href='#'>visitando o site</a> e{' '}
                <a href='#'>analisando o código</a>.
              </p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-6 project__image order-1'>
              <img src={Mentalize} alt='Repara!' loading='lazy' />
            </div>
            <div className='col-5 project__description text-end'>
              <h3>Mentalize</h3>
              <p>
                Site da clínica médica Mentalize, desenvolvido com HTML, CSS,
                Sass, Javascript e React, tendo uma área integrada com os posts do Instagram da clínica. O objetivo do projeto é informar aos pacientes sobre as atividades oferecidas e horários de funcionamento da clínica. Verifique a conclusão desse objetivo <a href='#'>visitando o site</a> e{' '}
                <a href='#'>analisando o código</a>.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
