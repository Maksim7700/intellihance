import '../../css/Intellihancetm.scss';
import Container from '../UI/Containter';
import intellihanceNotebook from '../images/intellihance-mac.png';

const IntellihanceTM = () => {
  return (
    <Container>
      <div className='intellihance-tm'>
        <div className='image-intellihance-tm'><img src={intellihanceNotebook} alt='intellihance notebook information'/></div>
        <div className='intellihance-tm-information'>
          <div className='Rifton intellihance-title-tm'>Intellihance™</div>
          <div className='Montserrat-400 intellihance-text-tm'>Is a dynamic platform that provides real-time, customized competitive intelligence, opportunity scores, and key metrics you need to help inform and build your marketing strategy and business plan.
              <p/>
              Intellihance™ can provide you with simple, actionable insights about your market and industry.<br/>
              Most importantly, we deliver results immediately.</div>
          <div className='intellihance-tm-button'><button className='Montserrat-500'>Try for FREE</button></div>
        </div>
      </div>
    </Container>
  )
}

export default IntellihanceTM;
