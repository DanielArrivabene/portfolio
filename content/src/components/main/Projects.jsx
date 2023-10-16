import '../../styles/components/Projects.scss';

function Projects() {
  return (
    <section id='projects' className="min-vh-100 d-flex align-items-center">
      <div className='container'>
        <h2 className="text-center">Confira alguns dos projetos já realizados:</h2>
        <article className="projects__container">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <h3>Repara!</h3>
                    <p>Projeto construído em HTML, Bootstrap, CSS, Sass, Javascript e React. Com foco em apresentar a empresa ao público alvo e atrair clientes, Repara! conta com uma identidade visual única e intuitiva. Fique por dentro dos detalhes visitando o site, e analisando o código.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 order-1"></div>
                <div className="col-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas esse qui tempora ipsum quod quam nemo unde, corporis dicta cum nam incidunt reprehenderit aspernatur non ad veniam quidem inventore obcaecati?</div>
            </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
