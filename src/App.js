import {Routes, Route } from 'react-router-dom';
import { PrivacyPolicy } from './js/pages/PrivacyPolicy';
import { Home } from './js/pages/Home';
import TermsOfUse from './js/pages/TermsOfUse';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
      </Routes>
  );
}

export default App;
