import Container from '../UI/Containter'
import '../../css/Solution.scss';
import demoImg from '../images/demo.png';
import demoImg2 from '../images/demo2.png';

const Solution = () => {
  return (
    <Container>
        <div className='solution'>
          <div>
            <div className='solution-title Rifton'>Solutions</div>
          </div>
          <div className='demo-solution'>
            <div className='demo-image'><img src={demoImg} alt='Demo'/></div>
            <div className='demo-text-box'>
              <div className='pre-title Montserrat-500'>For Consultants</div>
              <div className='demo-title Rifton'>Streamline research time for better client support</div>
              <div className='demo-text Montserrat-400'> Access unlimited report creation capabilities and get the latest 5-Year data profiles, in less than a minute:<br/>
              &emsp;&#8226;&emsp;Compare up to 5 markets<br/>
              &emsp;&#8226;&emsp;Benchmark 2 business segments within an industry<br/>
              &emsp;&#8226;&emsp;Organize reports by clients<br/>
              &emsp;&#8226;&emsp;Extend your access to five team members<br/>
              Request a customized demo of Intellihance and explore how it can streamline your business model today.</div>
              <div className='demo-button'><button className='Montserrat-500'>Book a Demo</button></div>
            </div>
          </div>
          <div><div className='demo-solution demo-solution-entrepreneurs'>
            <div className='demo-text-box-right'>
              <div className='pre-title Montserrat-500'>For Entrepreneurs</div>
              <div className='demo-title Rifton'>Get the latest market metrics you need to validate your business idea</div>
              <div className='demo-text Montserrat-400'>Unlike other report-generating tools, Intellihance™ lets you customize your data search for the specific market and industry of your choice.
                It saves you time, cuts down your research costs, and delivers clear data sets to build your business plan.<br/>
                &emsp;&#8226;&emsp;User-friendly Interface<br/>
                &emsp;&#8226;&emsp;Description of every data set, helping you make sense out of it<br/>
                &emsp;&#8226;&emsp;Report Summary page highlighting the most important metrics</div>
              <div className='demo-button '><button className='Montserrat-500'>Book a Demo</button></div>
            </div>
            <div className='demo-image'><img src={demoImg2} alt='Demo'/></div>
          </div></div>
        </div>
    </Container>
  )
}

export default Solution;
