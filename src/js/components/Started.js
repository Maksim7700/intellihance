import Container from '../UI/Containter';
import '../../css/Started.scss';

const Started = () => {
  return (
    <div className='started'>
      <Container>
        <div>
          <div className='started-title Rifton'>Everything you need to help grow a business is a click away</div>
          <div className='started-buttons'>
            <a className='a-signin' href='https://www.intellihance.biz/'><button className='Montserrat-500 sign-in-started'>Sign In</button></a>
            <a className='a-started' href='https://ideaconsult.biz/get-started/'><button className='Montserrat-500 get-started-started'>Get Started</button></a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Started;
