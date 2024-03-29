import Container from '../UI/Containter'
import '../../css/Solution.scss';
import demoImg from '../images/demo.png';
import demoImg2 from '../images/demo2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Solution = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
        <div className='solution'>
          <div>
            <div className='solution-title Rifton'>Solutions</div>
          </div>
          <div className='demo-solution'  data-aos="fade-up">
            <div className='demo-image'><img src={demoImg} alt='Demo'/></div>
            <div className='demo-text-box'>
              <div className='demo-title Rifton'>Streamline research time for better client support</div>
              <div className='demo-text Montserrat-400'> Access unlimited report creation capabilities and get the latest 5-Year data profiles, in less than a minute:<br/>
              &emsp;&#8226;&emsp;Compare up to 5 markets<br/>
              &emsp;&#8226;&emsp;Benchmark 2 business segments within an industry<br/>
              &emsp;&#8226;&emsp;Organize reports by clients<br/>
              &emsp;&#8226;&emsp;Extend your access to five team members<br/>
              Request a customized demo of Intellihance and explore how it can streamline your business model today.</div>
              <div className='demo-button'><a href='https://calendly.com/ideaconsultbiz/intellihancedemo_45min?month=2023-03' target="_blank" rel="noreferrer"><button className='Montserrat-500'>Book a Demo</button></a></div>
            </div>
          </div>
          <div><div className='demo-solution demo-solution-entrepreneurs'  data-aos="fade-up">
            <div className='demo-text-box-right'>
              <div className='demo-title Rifton'>Get the latest market metrics you need to validate your business idea</div>
              <div className='demo-text Montserrat-400'>Unlike other report-generating tools, Intellihance™ lets you customize your data search for the specific market and industry of your choice.
                It saves you time, cuts down your research costs, and delivers clear data sets to build your business plan.<br/>
                &emsp;&#8226;&emsp;User-friendly Interface<br/>
                &emsp;&#8226;&emsp;Description of every data set, helping you make sense out of it<br/>
                &emsp;&#8226;&emsp;Report Summary page highlighting the most important metrics</div>
              <div className='demo-button '><a href='https://calendly.com/ideaconsultbiz/intellihancedemo_45min?month=2023-03' target="_blank" rel="noreferrer"><button className='Montserrat-500'>Book a Demo</button></a></div>
            </div>
            <div className='demo-image'><img src={demoImg2} alt='Demo'/></div>
          </div>
          </div>
          <div className='solution-title Rifton' data-aos="fade-up">Sources</div>

          <div className='before-stats-block bf-2' data-aos="fade-up">
            <div className='stats'>
              <div className='block b-2 block-1'>
                <img src={'./Group1.svg'} alt='Gensus'></img>
              </div>
              <div className='block b-2'>
              <img src={'./Group2.svg'} alt='IBISWorld'></img>
              </div>
              <div className='block b-2'>
              <img src={'./Group3.svg'} alt='BEA'></img>
              </div>
              <div className='block b-2 block-last'>
              <img src={'./Group4.svg'} alt='BLS'></img>
              </div>
            </div>
          </div>
        </div>
    </Container>
  )
}

export default Solution;
