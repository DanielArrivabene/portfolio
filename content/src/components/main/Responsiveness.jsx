import '../../styles/components/Responsiveness.scss';

function Responsiveness() {
  return (
    <section id='responsiveness' className='section-area min-vh-100'>
      <article className='container d-flex flex-column align-items-center'>
        <p className='color--primary mb-1'>A IMPORTÂNCIA DA</p>
        <h2 className='responsiveness_title mb-4'>Responsividade</h2>
        <div className='responsiveness_container row flex-wrap w-100 mb-4'>
          <div className='col-lg-6 p-4'>
            <h3 className='mb-3'>O que é Responsividade?</h3>
            <p className='responsiveness__text'>
              Com toda a tecnologia atual, cada vez mais as pessoas acessam
              sites por meio de seus smartphones e tablets. Por este motivo, é
              fundamental ter um site responsivo nos dias de hoje. Se sua
              empresa ainda não possui um site responsivo é possível que esteja
              perdendo muitas oportunidade e clientes. O conteúdo de um site
              responsivo pode se adaptar de acordo com o tamanho de cada tela.
              Não importando se o usuário está acessando este conteúdo de um
              celular smartphone, tablet, notebook ou desktop tradicional. Assim
              é possível acessar o conteúdo de forma muito mais prática, sem
              precisar dar um zoom na sua tela. As informações ficam muito mais
              claras e a experiência de navegação do usuário muito mais
              agradável.
            </p>
          </div>
          <div className='col-lg-6 p-4'>
            <h3 className='mb-3'>O que você ganha com isso?</h3>
            <p className='responsiveness__text'>
              De acordo com os dados da Target Group Index, os acessos via
              celulares representam cerca de 64% entre os usuários. De acordo
              com a Hoodzpah Design cerca de 54% dos usuários de internet se
              sentem frustrados ao acessar um site que não é adaptado totalmente
              para múltiplos tipos de tela. E 52% dos usuários disseram que
              seriam menos propensos a se envolver com uma empresa caso a
              experiência com seu website não fosse boa. O ID7 Studio se
              preocupa com estes aspectos que podem fazer toda a diferença na
              hora de captar um novo lead para a sua empresa.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Responsiveness;
