import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/home/home';
import Studio from './components/studio/studio';
import Cover from './components/cover/cover';
import Navigation from './components/navigation/navigation';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
 } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div  className='Container'>
    <Router>
      <Routes>
        <Route path='/' element={<Navigation/>} > 
          <Route path=':cover' element={<Cover/>} />
          <Route exact path='/' element={<Home />} />
        </ Route>
      </Routes>
    </Router>
  </div>
);


reportWebVitals();
