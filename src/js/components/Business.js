import Container from '../UI/Containter';
import '../../css/Business.scss';
import page from '../images/page.png';

const Business = () => {
  return (
    <Container>
      <div className='business'>
        <div className='business-block-1'>
          <div className='business-block-desc'>
            <div className='bussines-title Rifton'>Business Opportunity Score</div>
            <div className='business-desc Montserrat-400'>Our proprietary scoring formula is developed by our team of strategy consultants and Ivy-League advisors. Get a preliminary score assessment of opportunities for your target area and industry.</div>
          </div>
          <div className='bussiness-img-1'><img src={page} alt='page'/></div>
        </div>
        <div className='business-block-2'>
          <div className='bussiness-img-2'><img src={page} alt='page'/></div>
          <div className='business-block-desc bussiness-block-desc-2'>
            <div className='bussines-title Rifton'>Competitive Landscape</div>
            <div className='business-desc Montserrat-400'>Accurately plot industry landscape and stay updated on top players. Identify the key competitors within your area and strategize on differentiating your business.</div>
          </div>
        </div>
        <div className='business-block-1'>
          <div className='business-block-desc'>
            <div className='bussines-title Rifton'>Demographic Data</div>
            <div className='business-desc Montserrat-400'>Build an accurate customer persona to help you craft a winning marketing strategy.</div>
          </div>
          <div className='bussiness-img-1'><img src={page} alt='page'/></div>
        </div>
        <div className='business-block-2 last'>
          <div className='bussiness-img-2'><img src={page} alt='page'/></div>
          <div className='business-block-desc bussiness-block-desc-2'>
            <div className='bussines-title Rifton'>Industry Outlook</div>
            <div className='business-desc Montserrat-400'>We provide in-depth data on over 1,500 industries. Learn and monitor key insights, such as revenue and growth, to improve your decision-making process.</div>
          </div>
        </div>
        <div className='business-button Montserrat-500'><button>Try now</button></div>
      </div>
    </Container>
  );
}

export default Business;
