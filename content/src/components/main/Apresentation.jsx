import '../../styles/components/Apresentation.scss';

import { IoArrowForwardSharp } from "react-icons/io5";

function Apresentation() {
  return (
    <section
      id='home'
      className=' container min-vh-100 d-flex 
      flex-column
      justify-content-center align-items-center
    '
    >
      <h1 className='text-center mb-4'>
        Elegância, <span>Inovação</span>
        <br />e Produtividade
      </h1>
      <p className='text-center mb-5'>
        Desenvolvimento de Websites com alta responsividade e SEO integrados. <br /> Feitos sob
        medida para o seu negócio.
      </p>
      <div className='apresentation__butons_container'>
        <a href='#about' className='apresentation__buton mt-5'>
          Saiba mais <IoArrowForwardSharp />
        </a>
      </div>
    </section>
  );
}

export default Apresentation;
