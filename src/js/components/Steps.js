import Container from '../UI/Containter'
import '../../css/Steps.scss';
import userOctagon from '../images/user-octagon.svg';
import documentFavorite from '../images/document-favorite.svg';
import taskSquare from '../images/task-square.svg';
import user1 from '../images/1_.svg';
import document2 from '../images/2_.svg';
import task3 from '../images/3_.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Steps = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='steps-red' data-aos="fade-up">
      <Container>
        <div className='steps'>
          <div>
            <div className='steps-title Rifton'>3 easy steps to get started</div>
            <div className='steps-desc Montserrat-400'>Test-drive Intellihance™ to search your market area, browse through our list of industries, and explore the full capabilities of creating your custom report.</div>
          </div>
          <div className='steps-steo'>
            <div className='step-task'>
              <div className='step-img'><img src={userOctagon} alt='User octagon'/></div>
              <div className='step-img2'><img src={user1} alt='User octagon'/></div>
              <div className='Montserrat-400 step-task-desc'>Create your Account</div>
            </div>
            <div className='step-task'>
              <div className='step-img'><img src={documentFavorite} alt='Document favorite'/></div>
              <div className='step-img2'><img src={document2} alt='Document favorite'/></div>
              <div className='Montserrat-400 step-task-desc'>Specify your Area, Business, Ideal Customer Profile</div>
            </div>
            <div className='step-task step-task-last'>
              <div className='step-img'><img src={taskSquare} alt='Task square'/></div>
              <div className='step-img2'><img src={task3} alt='Task square'/></div>
              <div className='Montserrat-400 step-task-desc'>Select a Plan to Generate your Report</div>
            </div>
          </div>
          <div className='button-step'><a href='https://ideaconsult.biz/get-started/' target="_blank" rel="noreferrer"><button className='Montserrat-500'>Get Started</button></a></div>
        </div>
      </Container>
    </div>
  );
}

export default Steps;
