import Container from '../UI/Containter';
import '../../css/Header.scss';
import '../../css/Classes.scss';
import '../../css/fonts/fonts.css';
import intellihance from '../images/intellihance-logo.svg';

const Header = () => {


  return (
    <Container>
      <div className='d-flex justify-content-between'>
        <div className='logo'><img src={intellihance} alt='intellihance'/></div>
        <div className='buttons d-flex'>
          <button className='sign-in Montserrat-500'>Sign In</button>
          <button className='get-started Montserrat-500'>Get Started</button>
        </div>
      </div>
    </Container>
  )
}

export default Header;
