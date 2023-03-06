import Container from '../UI/Containter';
import '../../css/Main.scss';
import '../../css/fonts/fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <div className='main' data-aos="fade-up">
        <div className='title'><div className='Rifton'>HARNESSING BUSINESS INTELLIGENCE</div></div>
        <div className='desc'><div className='Montserrat-500 desc-text'>Equipping Business Consultants, Marketing Consultants, Venture Capitalists, and Accelerators/Incubators with Real-Time, actionable data and insights for a winning business strategy.</div></div>
        <div className='button'><a href='https://ideaconsult.biz/get-started/' target="_blank" rel="noreferrer"><button className='get-started Montserrat-500'>Get started</button></a></div>
      </div>
    </Container>
  )
}

export default Main;
