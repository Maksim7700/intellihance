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
                <div className='mocks Rifton'>20,000</div>
                <div className='values Montserrat-500'>Markets Analyzed</div>
              </div>
              <div className='block'>
                <div className='mocks Rifton'>10+ million</div>
                <div className='values Montserrat-500'>US Businesses</div>
              </div>
              <div className='block'>
                <div className='mocks Rifton'>9,000 +</div>
                <div className='values Montserrat-500'>Industries</div>
              </div>
              <div className='block block-last'>
                <div className='mocks Rifton'>184 Billion+</div>
                <div className='values Montserrat-500'>Market Combinations</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Statistic;
