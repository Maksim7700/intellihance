import {Routes, Route } from 'react-router-dom';
import { Home } from './js/pages/Home';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
  );
}

export default App;
