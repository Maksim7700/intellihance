import Container from '../UI/Containter';
import '../../css/Header.scss';
import '../../css/Classes.scss';
import '../../css/fonts/fonts.css';
import intellihance from '../images/intellihance-logo.svg';
import { useState } from 'react';

const Header = () => {

  const [changeHeadColor, setChangeHeadColor] = useState(false);

  const changeBackground = () => {
      if (window.scrollY > 25) {
          setChangeHeadColor(true);
      } else {
          setChangeHeadColor(false);
      }
  }

  window.addEventListener('scroll', changeBackground);

  const [menu, setMenu] = useState(false);

  const openCloseMenu = () => {
    setMenu(!menu);
  }

  return (
    <Container>
      <div className={`d-flex justify-content-between header ${changeHeadColor ? 'border-bottom' : 'border-bottom-0'}`}>
        <div className='header-widht'>
        <div className='logo'><img src={intellihance} alt='intellihance'/></div>
        <div className='buttons d-flex'>
          <a href='https://www.intellihance.biz/' target="_blank" rel="noreferrer"><button className='sign-in Montserrat-500'>Sign In</button></a>
          <a href='https://ideaconsult.biz/get-started/' target="_blank" rel="noreferrer"><button className='get-started Montserrat-500'>Get Started</button></a>
        </div>
        <label className={`navbar-toggler ${menu ? '' : 'margin-top-more'}`} onClick={openCloseMenu}>
          <span className={`bar ${!menu ? '' : 'bar-1'}`}></span>
          <span className={`bar ${!menu ? '' : 'bar-2'}`}></span>
          <span className={`bar ${!menu ? '' : 'bar-3'}`}></span>
        </label>
        <div className={`nav-list ${menu ? '' : 'd-none'} ${changeHeadColor ? 'border-bottom-mobile' : ''}`}>
          <a href='https://www.intellihance.biz/' target="_blank" rel="noreferrer"><button className='sign-in Montserrat-500'>Sign In</button></a>
          <a href='https://ideaconsult.biz/get-started/' target="_blank" rel="noreferrer"><button className='get-started Montserrat-500'>Get Started</button></a>
    </div>
      </div>
      </div>
    </Container>
  )
}

export default Header;
