import Business from '../components/Business';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IntellihanceTM from '../components/IntellihanceTM';
import Main from '../components/Main';
import Platform from '../components/Platform';
import Solution from '../components/Solution';
import Started from '../components/Started';
import Statistic from '../components/Statistic';
import Steps from '../components/Steps';


export const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Statistic />
      <IntellihanceTM />
      <Platform />
      <Business />
      <Steps />
      <Solution />
      <Started />
      <Footer />
    </>
  );
}

export default Home;
