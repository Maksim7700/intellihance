import Container from '../UI/Containter';
import '../../css/Footer.scss';
import intellihance from '../images/intellihance-logo.svg';
import sms from '../images/sms-tracking.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {



  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <div className='footer'>
        <div className='footer-head'>
          <div className='footer-logo'><a href='https://ideaconsult.biz/' target="_blank" rel="noreferrer"><img src={intellihance} alt='intellihance'/></a></div>
          <div className='social'>
            <div className='first-social'>
            <a href='https://ideaconsult.biz/' target="_blank" rel="noreferrer" className='social-left intellihance'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="6" fill="#EE4242"/>
              <path d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.9996 11H16.9996C15.0496 16.84 15.0496 23.16 16.9996 29H15.9996" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23 11C24.95 16.84 24.95 23.16 23 29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11 24V23C16.84 24.95 23.16 24.95 29 23V24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11 17.0016C16.84 15.0516 23.16 15.0516 29 17.0016" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
            <a href='https://www.linkedin.com/company/idea-consult-biz/' target="_blank" rel="noreferrer" className='linkedin'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="6" fill="#EE4242"/>
                <path d="M15.6 28H12.2V17.3H15.6V28ZM13.9 15.8C12.8 15.8 12 15 12 13.9C12 12.8 12.9 12 13.9 12C15 12 15.8 12.8 15.8 13.9C15.8 15 15 15.8 13.9 15.8ZM28 28H24.6V22.2C24.6 20.5 23.9 20 22.9 20C21.9 20 20.9 20.8 20.9 22.3V28H17.5V17.3H20.7V18.8C21 18.1 22.2 17 23.9 17C25.8 17 27.8 18.1 27.8 21.4V28H28Z" fill="white"/>
              </svg>
            </a>
            <a href='https://youtube.com/@ideaconsultbiz' target="_blank" rel="noreferrer" className='youtube'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="6" fill="#EE4242"/>
                <path d="M28.55 15.9732C28.325 15.1607 27.7625 14.5804 26.975 14.3482C25.625 14 19.8875 14 19.8875 14C19.8875 14 14.2625 14 12.8 14.3482C12.0125 14.5804 11.45 15.1607 11.225 15.9732C11 17.4821 11 20.5 11 20.5C11 20.5 11 23.5179 11.3375 25.0268C11.5625 25.8393 12.125 26.4196 12.9125 26.6518C14.2625 27 20 27 20 27C20 27 25.625 27 27.0875 26.6518C27.875 26.4196 28.4375 25.8393 28.6625 25.0268C29 23.5179 29 20.5 29 20.5C29 20.5 29 17.4821 28.55 15.9732ZM18.2 23.2857V17.7143L22.925 20.5L18.2 23.2857Z" fill="white"/>
              </svg>
            </a>
            <a href='https://twitter.com/IdeaConsult_biz' target="_blank" rel="noreferrer" className='twitter'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="6" fill="#EE4242"/>
                <path d="M29 14.6154C28.325 14.9385 27.65 15.0462 26.8625 15.1538C27.65 14.7231 28.2125 14.0769 28.4375 13.2154C27.7625 13.6462 26.975 13.8615 26.075 14.0769C25.4 13.4308 24.3875 13 23.375 13C21.0125 13 19.2125 15.1538 19.775 17.3077C16.7375 17.2 14.0375 15.8 12.125 13.6462C11.1125 15.2615 11.675 17.3077 13.25 18.3846C12.6875 18.3846 12.125 18.1692 11.5625 17.9538C11.5625 19.5692 12.8 21.0769 14.4875 21.5077C13.925 21.6154 13.3625 21.7231 12.8 21.6154C13.25 23.0154 14.6 24.0923 16.2875 24.0923C14.9375 25.0615 12.9125 25.6 11 25.3846C12.6875 26.3538 14.6 27 16.625 27C23.4875 27 27.3125 21.5077 27.0875 16.4462C27.875 16.0154 28.55 15.3692 29 14.6154Z" fill="white"/>
              </svg>
            </a>
            </div>
            <div className='second-social'>
            <a href='https://www.facebook.com/IdeaConsult.biz' target="_blank" rel="noreferrer" className='facebook'><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="6" fill="#EE4242"/>
              <path d="M29 20C29 15.05 24.95 11 20 11C15.05 11 11 15.05 11 20C11 24.5 14.2625 28.2125 18.5375 28.8875V22.5875H16.2875V20H18.5375V17.975C18.5375 15.725 19.8875 14.4875 21.9125 14.4875C22.925 14.4875 23.9375 14.7125 23.9375 14.7125V16.9625H22.8125C21.6875 16.9625 21.35 17.6375 21.35 18.3125V20H23.825L23.375 22.5875H21.2375V29C25.7375 28.325 29 24.5 29 20Z" fill="white"/>
              </svg>
            </a>
            <a href='https://www.instagram.com/ideaconsult.biz/?igshid=YmMyMTA2M2Y=' target="_blank" rel="noreferrer" className='instagram'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="6" fill="#EE4242"/>
                <path d="M20 11.8072C22.6506 11.8072 23.0121 11.8072 24.0964 11.8072C25.0602 11.8072 25.5422 12.0482 25.9036 12.1687C26.3855 12.4096 26.747 12.5301 27.1084 12.8916C27.4699 13.253 27.7108 13.6145 27.8313 14.0964C27.9518 14.4578 28.0723 14.9398 28.1928 15.9036C28.1928 16.988 28.1928 17.2289 28.1928 20C28.1928 22.7711 28.1928 23.0121 28.1928 24.0964C28.1928 25.0602 27.9518 25.5422 27.8313 25.9036C27.5904 26.3855 27.4699 26.747 27.1084 27.1084C26.747 27.4699 26.3855 27.7108 25.9036 27.8313C25.5422 27.9518 25.0602 28.0723 24.0964 28.1928C23.0121 28.1928 22.7711 28.1928 20 28.1928C17.2289 28.1928 16.988 28.1928 15.9036 28.1928C14.9398 28.1928 14.4578 27.9518 14.0964 27.8313C13.6145 27.5904 13.253 27.4699 12.8916 27.1084C12.5301 26.747 12.2892 26.3855 12.1687 25.9036C12.0482 25.5422 11.9277 25.0602 11.8072 24.0964C11.8072 23.0121 11.8072 22.7711 11.8072 20C11.8072 17.2289 11.8072 16.988 11.8072 15.9036C11.8072 14.9398 12.0482 14.4578 12.1687 14.0964C12.4096 13.6145 12.5301 13.253 12.8916 12.8916C13.253 12.5301 13.6145 12.2892 14.0964 12.1687C14.4578 12.0482 14.9398 11.9277 15.9036 11.8072C16.988 11.8072 17.3494 11.8072 20 11.8072ZM20 10C17.2289 10 16.988 10 15.9036 10C14.8193 10 14.0964 10.241 13.494 10.4819C12.8916 10.7229 12.2892 11.0843 11.6867 11.6867C11.0843 12.2892 10.8434 12.7711 10.4819 13.494C10.241 14.0964 10.1205 14.8193 10 15.9036C10 16.988 10 17.3494 10 20C10 22.7711 10 23.0121 10 24.0964C10 25.1807 10.241 25.9036 10.4819 26.506C10.7229 27.1084 11.0843 27.7108 11.6867 28.3133C12.2892 28.9157 12.7711 29.1566 13.494 29.5181C14.0964 29.759 14.8193 29.8795 15.9036 30C16.988 30 17.3494 30 20 30C22.6506 30 23.0121 30 24.0964 30C25.1807 30 25.9036 29.759 26.506 29.5181C27.1084 29.2771 27.7108 28.9157 28.3133 28.3133C28.9157 27.7108 29.1566 27.2289 29.5181 26.506C29.759 25.9036 29.8795 25.1807 30 24.0964C30 23.0121 30 22.6506 30 20C30 17.3494 30 16.988 30 15.9036C30 14.8193 29.759 14.0964 29.5181 13.494C29.2771 12.8916 28.9157 12.2892 28.3133 11.6867C27.7108 11.0843 27.2289 10.8434 26.506 10.4819C25.9036 10.241 25.1807 10.1205 24.0964 10C23.0121 10 22.7711 10 20 10Z" fill="white"/>
                <path d="M20 14.8193C17.1084 14.8193 14.8193 17.1084 14.8193 20C14.8193 22.8916 17.1084 25.1807 20 25.1807C22.8916 25.1807 25.1807 22.8916 25.1807 20C25.1807 17.1084 22.8916 14.8193 20 14.8193ZM20 23.3735C18.1928 23.3735 16.6265 21.9277 16.6265 20C16.6265 18.1928 18.0723 16.6265 20 16.6265C21.8072 16.6265 23.3735 18.0723 23.3735 20C23.3735 21.8072 21.8072 23.3735 20 23.3735Z" fill="white"/>
                <path d="M25.3012 15.9036C25.9666 15.9036 26.506 15.3642 26.506 14.6988C26.506 14.0334 25.9666 13.494 25.3012 13.494C24.6358 13.494 24.0964 14.0334 24.0964 14.6988C24.0964 15.3642 24.6358 15.9036 25.3012 15.9036Z" fill="white"/>
              </svg>
            </a>
            </div>
          </div>
        </div>
        <div className='hr'></div>
        <div className='footer-fot'>
          <div className='terms'>
            <div className='term Montserrat-400'><a href='https://ideaconsult.biz/terms-conditions/' target='_blank' rel="noreferrer">Terms of Use</a></div>
            <div className='privacy Montserrat-400'><a href='https://ideaconsult.biz/privacy-policy/' target='_blank' rel="noreferrer">Privacy Policy</a></div>
          </div>
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjsvCJKkfqNhTqWDhhrHmTsVkfMcRcxmvMDclLJNDQjljCqrjtbdCvtpqRFtnlHCbXtwJH' target='_blank' rel="noreferrer"><div className='Montserrat-400 email'><img src={sms} alt='email'/>info@ideaconsult.biz</div></a>
        </div>
      </div>
    </Container>
  )
}

export default Footer;
