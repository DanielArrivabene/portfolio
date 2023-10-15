import '../../styles/components/Navbar.scss';

function Navbar() {
  return (
    <header>
      <nav
        id='navbar'
        className='navbar navbar-expand container py-4 d-flex justify-content-between'
      >
        <h2 className='logo'>DGA</h2>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About
            </a>
            <hr/>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About
            </a>
            <hr/>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About
            </a>
            <hr/>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              teste
            </a>
            <hr/>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              teste
            </a>
            <hr/>
          </li>
        </ul>
        <button id='theme_toggler'>t</button>
      </nav>
    </header>
  );
}

export default Navbar;
