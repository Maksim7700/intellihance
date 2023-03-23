import Container from '../UI/Containter';
import '../../css/Started.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Started = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='started' data-aos="fade-up">
      <Container>
        <div>
          <div className='started-title Rifton'>Everything you need to help grow a business is a click away</div>
          <div className='started-buttons'>
            <a className='a-started' href='https://ideaconsult.biz/get-started/'><button className='Montserrat-500 get-started-started'>Create Account</button></a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Started;
