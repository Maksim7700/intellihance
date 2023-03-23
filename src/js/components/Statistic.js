import Container from '../UI/Containter';
import '../../css/Statistic.scss';
import '../../css/fonts/fonts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Statistic = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='statistic' >
      <Container>
        <div className='d-flex flex-direction-column justify-content-center'>
          <div className='image-mockup d-flex justify-content-center'>
            <img src={'../mockup.svg'} data-aos="fade-up" alt='mockup'/>
          </div>
          <div className='before-stats-block'>
            <div className='stats'>
              <div className='block block-1'>
                <div className='mocks Rifton'>45,000 +</div>
                <div className='values Montserrat-500'>Areas</div>
              </div>
              <div className='block'>
                <div className='mocks Rifton'>1,500 +</div>
                <div className='values Montserrat-500'>Industries</div>
              </div>
              <div className='block'>
                <div className='mocks Rifton'>7,200 +</div>
                <div className='values Montserrat-500'>Major Players</div>
              </div>
              <div className='block block-last'>
                <div className='mocks Rifton'>30 sec</div>
                <div className='values Montserrat-500'>Time to produce a report</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Statistic;
