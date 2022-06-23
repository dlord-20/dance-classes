import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/home/home';
import Studio from './components/studio/studio';
import Cover from './components/cover/cover';
import Navigation from './components/navigation/navigation';
import SignUp from './components/sign-up/sign-up';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Classes from './components/studio/classes/classes';
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
  <div  className='container'>
    <Router>
      <Routes>
        <Route path='/' element={<Navigation/>} > 
          <Route exact path='/' element={<Home />} />
          <Route path='studio' element={<Studio />} >
            <Route path=':classes' element={<Classes />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='sign-up' element={<SignUp />} />
        </ Route>
      </Routes>
    </Router>
  </div>
);


reportWebVitals();
