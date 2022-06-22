import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/home/home';
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
      <Route path='/' element={<Navigation />} >        
        <Route path='/' element={<Home />} />
      </ Route>
        <Route path='/redirect' element={<Home replace to='/studio'/>} />
        <Route path='/' element={<Navigation />} />
      </Routes>
    </Router>
  </div>
);


reportWebVitals();
