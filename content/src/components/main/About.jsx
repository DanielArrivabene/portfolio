import '../../styles/components/About.scss';

import Avatar from '../../assets/eu.png';

function About() {

  return (
    <section
      id='about'
      className='d-flex justify-content-around section-area min-vh-100'
    >
      <article className='container row flex-wrap-reverse'>
        <div className='col-lg-6 d-flex flex-column justify-content-between about__data'>
          <div className='about__text_container'>
            <p className='color--primary mb-2'>QUEM SOU?</p>
            <h2 className='mb-5'>A mente por trás da máscara</h2>
            <p className='about__text  mb-3'>
              Satisfação! Me chamo <strong>Daniel Goulart Arrivabene</strong>,
              eu atuo como Web Developer e Designer a mais de 4 anos; além de
              ter uma forte paixão por música e milkshake.
            </p>
            <p className='about__text mb-3'>
              Durante esses anos, atuei no desenvolvimento web criando uma ampla
              variedade de websites para uma diversidade de clientes. Meu
              compromisso é proporcionar <strong>total satisfação</strong>, combinada com <strong>agilidade</strong> em todo o processo de desenvolvimento.
            </p>
            <p className='about__text mb-5'>
              No desenvolvimento, parceria é fundamental: juntos, eu e você
              trabalharemos para alcançar o <strong>resultado desejad</strong>o. Por que não  solicita um <strong>orçamento gratuito agora mesmo</strong>? Estou ansioso para
              iniciar nosso próximo projeto!
            </p>
            <a href='#atributes' className='about__link'>
              Veja as vantagens
            </a>
          </div>
        </div>
        <div className='col-lg-6 about__image_container'>
          <img
            src={Avatar}
            alt='Daniel Goulart Arrivabene'
            className='about__image mb-5'
          />
        </div>
      </article>
    </section>
  );
}

export default About;
