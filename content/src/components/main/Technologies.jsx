import '../../styles/components/Technologies.scss';

import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandBootstrap,
  TbBrandTypescript,
  TbBrandFramerMotion,
} from 'react-icons/tb';
import { FaSass, FaReact } from 'react-icons/fa';
import { RiJavascriptLine, RiWordpressFill } from 'react-icons/ri';
import { SiAxios, SiRedux } from 'react-icons/si';
import { LiaGitAlt } from 'react-icons/lia';

function Technologies() {
  const technologiesList = [
    { name: 'HTML', icon: <TbBrandHtml5 /> },
    { name: 'Bootstrap', icon: <TbBrandBootstrap /> },
    { name: 'CSS', icon: <TbBrandCss3 /> },
    { name: 'Sass', icon: <FaSass /> },
    { name: 'Axios', icon: <SiAxios /> },
    { name: 'Javascript', icon: <RiJavascriptLine /> },
    { name: 'Typescript', icon: <TbBrandTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Git', icon: <LiaGitAlt /> },
    { name: 'Wordpress', icon: <RiWordpressFill /> },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
  ];

  return (
    <section id='technologies'>
      <div className='container'>
        <div className='row justify-content-between gap-4'>
          <article className='col-md-5 tech__description'>
            <h2>Quais são as tecnologias que domino?</h2>
            <p>
              Desenvolvo interfaces intuitivas e responsivas. Melhorando a
              experiência do usuário com as tecnologias a seguir.
            </p>
            <p>
              Para mais informações <a href='#contact'>entre em contato</a>.
            </p>
          </article>
          <article className='col-md-6 tech__items'>
            <ul className='list-group tech__list'>
              {technologiesList.map((tech) => (
                <li
                  key={tech.name}
                  className={`list-group-item d-flex
                 justify-content-center align-items-center ${tech.name}`}
                >
                  {tech.icon}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
