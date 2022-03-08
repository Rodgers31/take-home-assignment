import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Forming from './components/Forming';
import Nonforming from './components/Nonforming';
import './index.css';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='forming' element={<Forming />} />
      <Route path='nonforming' element={<Nonforming />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
