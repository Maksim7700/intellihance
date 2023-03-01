import Container from '../UI/Containter';
import '../../css/Platform.scss';

const Platform = () => {
  return (
    <div className='platrofm-div'>
    <Container>
      <div className='platform'>
        <div className='platform-title Rifton'>A One-Stop Market Research Platform</div>
        <div className='market'>
          <div className='market-inside'>
            <div className='market-information'>
              <div className='inside-market-information'>
                <div className='market-logo'><img src='./monitor.svg' alt='monitor'/></div>
                <div className='market-box'>
                  <div className='market-title Montserrat-600'>A Unique User Interface</div>
                  <div className='market-desc Montserrat-400'>Intellihance™ identifies your needs with three easy steps:<br/>
                   1. Select your area.<br/>
                   2. Select your target industry.<br/>
                   3. Define your customer persona.</div>
                </div>
              </div>
            </div>
            <div className='market-information'>
              <div className='inside-market-information'>
                <div className='market-logo'><img src='./programming-arrow.svg' alt='monitor'/></div>
                <div className='market-box'>
                  <div className='market-title Montserrat-600'>A Proprietary Algorithm</div>
                  <div className='market-desc Montserrat-400'>Whether you’re looking to assess business opportunities, understand the latest industry trends, or enrich your marketing strategy, Intellihance™ can deliver accurate and instant results.</div>
                </div>
              </div>
            </div>
            <div className='market-information'>
              <div className='inside-market-information'>
                <div className='market-logo'><img src='./clipboard-text.svg' alt='monitor'/></div>
                <div className='market-box'>
                  <div className='market-title Montserrat-600'>Access to All Reports </div>
                  <div className='market-desc Montserrat-400'>Access your reports in downloadable formats PDF Excel from the convenience of your Intellihance™ dashboard.</div>
                </div>
              </div>
            </div>
          </div>
          <div className='video-flex'>
          <div className='video-box'>
            <div className='video'>
              <iframe src='https://www.youtube.com/embed/zC4rZpHf8tw?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=1&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fideaconsult.biz&amp;widgetid=1' allowFullScreen title='Y'></iframe>
              </div>
          </div>
          <div className='video-button'><button className='Montserrat-500'>Try Now</button></div>
          </div>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default Platform;
