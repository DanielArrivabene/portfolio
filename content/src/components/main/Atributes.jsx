import '../../styles/components/Atributes.scss';

function Atributes() {
  return (
    <section
      id='atributes'
      className='d-flex justify-content-around section-area'
    >
      <article className='container row justify-content-between align-items-center'>
        <div className='col-lg-6 atributes__container d-flex flex-wrap gap-4'>
          <div className='atribute one p-4 d-flex justify-content-between align-items-center'>
            <h3 className='atribute__service m-0'>Escalável</h3>
            <h3 className='atribute__service m-0'>Responsivo</h3>
            <h3 className='atribute__service m-0'>Rápido</h3>
          </div>
          <div className='atribute two p-4'>
            <h3>Como saber se preciso de um site?</h3>
          </div>
          <div className='atribute tree p-4 d-flex flex-column justify-content-between'>
            <p className='mb-2'>
              ´´Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti, quae vero, perferendis ipsum quos totam aperiam´´
              <strong className='mt-2 d-block'>Por Patrick Mendes</strong>
            </p>
            <a href='#testemonials' className='atribute__link'>
              Ver mais
            </a>
          </div>
        </div>
        <div className='col-lg-6 atributes__data'>
          <h2 className='mb-3'>Vantagens de ter um site</h2>
          <p className='atributes__text mb-3'>
            Visibilidade Online: Ter um site aumenta significativamente a
            visibilidade da sua empresa na internet. Permite que clientes em
            potencial encontrem sua empresa facilmente ao procurar por serviços
            relacionados. Credibilidade: Um site bem projetado e profissional
            cria uma imagem de credibilidade para sua empresa. Os clientes
            tendem a confiar mais em empresas que têm uma presença online
            estabelecida. Acesso 24/7: Seu site está disponível 24 horas por
            dia, 7 dias por semana, proporcionando aos clientes acesso constante
            às informações sobre seus serviços. Marketing Eficiente: Um site
            serve como uma ferramenta de marketing eficaz, permitindo a promoção
            de seus serviços, produtos e conquistas. Estratégias como SEO
            (Search Engine Optimization) ajudam a atrair tráfego orgânico para o
            seu site. Comunicação Direta: Facilita a comunicação direta com os
            clientes por meio de formulários de contato, chat online ou
            informações de contato visíveis. Perguntas frequentes (FAQs) no site
            podem antecipar e responder às dúvidas comuns dos clientes.
            Portfólio Online: Apresente seus projetos anteriores e cases de
            sucesso por meio de um portfólio online, demonstrando suas
            habilidades e experiência. Expansão de Mercado: Um site permite que
            sua empresa alcance um público mais amplo, ultrapassando as
            barreiras geográficas locais. Facilidade de Atualização: É fácil e
            rápido atualizar informações no seu site, permitindo manter clientes
            informados sobre novos serviços, ofertas e eventos. Competitividade:
            Ter um site coloca sua empresa em igualdade de condições com os
            concorrentes que já têm presença online. Pode ser um diferencial
            competitivo no mercado. Análise de Desempenho: Ferramentas
            analíticas integradas ao site oferecem insights sobre o tráfego,
            comportamento do usuário e desempenho das páginas. Integração com
            Redes Sociais: Facilita a integração com plataformas de redes
            sociais, ampliando ainda mais o alcance e a interação com o público.
            Facilidade de Contato: Fornece informações de contato claras e
            facilita a comunicação, permitindo que os clientes entrem em contato
            com facilidade.
          </p>
          <p className='atributes__text mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            accusamus deserunt aperiam quas
          </p>
          <a href='#' className='atributes__link mb-2'>
            Saiba mais
          </a>
          <p className='atributes_call'>*Faça um orçamento, é grátis!</p>
        </div>
      </article>
    </section>
  );
}

export default Atributes;
