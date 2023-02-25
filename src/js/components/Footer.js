import Container from '../UI/Containter';
import '../../css/Footer.scss';
import intellihance from '../images/intellihance-logo.svg';
import sms from '../images/sms-tracking.svg';

const Footer = () => {
  return (
    <Container>
      <div className='footer'>
        <div className='footer-head'>
          <div className='footer-logo'><img src={intellihance} alt='intellihance'/></div>
          <div className='social'>
            <img className='social-left' src={'./linkedin.svg'} alt='linked-in'/>
            <img src={'./youtube.svg'} alt='youtube'/>
            <img src={'./twitter.svg'} alt='twitter'/>
            <img src={'./facebook.svg'} alt='facebook'/>
            <img src={'./instagram.svg'} alt='instagram'/>
          </div>
        </div>
        <div className='hr'><hr/></div>
        <div className='footer-fot'>
          <div className='terms'>
            <div className='term Montserrat-400'>Terms of Use</div>
            <div className='privacy Montserrat-400'>Privacy Policy</div>
          </div>
          <div className='Montserrat-400 email'><img src={sms} alt='email'/>team@intellihance.com</div>
        </div>
      </div>
    </Container>
  )
}

export default Footer;
