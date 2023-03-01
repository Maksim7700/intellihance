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
        <div className={`nav-list ${menu ? '' : 'd-none'}`}>
          <button className='sign-in Montserrat-500'>Sign In</button>
          <button className='get-started Montserrat-500'>Get Started</button>
    </div>
      </div>
    </Container>
  )
}

export default Header;
