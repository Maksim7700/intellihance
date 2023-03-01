import Container from '../UI/Containter';
import '../../css/Header.scss';
import '../../css/Classes.scss';
import '../../css/fonts/fonts.css';
import intellihance from '../images/intellihance-logo.svg';
import { useState } from 'react';

const Header = () => {

  const [menu, setMenu] = useState(false);

  const openCloseMenu = () => {
    console.log(!menu)
    setMenu(!menu);
  }

  return (
    <Container>
      <div className='d-flex justify-content-between'>
        <div className='logo'><img src={intellihance} alt='intellihance'/></div>
        <div className='buttons d-flex'>
          <button className='sign-in Montserrat-500'>Sign In</button>
          <button className='get-started Montserrat-500'>Get Started</button>
        </div>
        <label className={`navbar-toggler ${menu ? '' : 'margin-top-more'}`} onClick={openCloseMenu}>
          <span className={`bar ${!menu ? '' : 'bar-1'}`}></span>
          <span className={`bar ${!menu ? '' : 'bar-2'}`}></span>
          <span className={`bar ${!menu ? '' : 'bar-3'}`}></span>
        </label>
        <div class={`nav-list ${menu ? '' : 'd-none'}`}>
          <button className='sign-in Montserrat-500'>Sign In</button>
          <button className='get-started Montserrat-500'>Get Started</button>
    </div>
      </div>
{/* <nav>

    <a class="navbar-brand" href="#">
        Menu Brand
    </a>

    <label class="navbar-toggler" for="toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </label>

    <ul class="nav-list">
        <li class="nav-item">
            <a class="nav-link">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link">Blog</a>
        </li>
        <li class="nav-item">
            <a class="nav-link">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link">Contact</a>
        </li>
    </ul>

</nav> */}
    </Container>
  )
}

export default Header;
