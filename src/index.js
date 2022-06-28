import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//import components
import Home from './components/home/home';
import Studio from './components/studio/studio';
import Navigation from './components/navigation/navigation';
import SignUp from './components/sign-up/sign-up';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Classes from './components/studio/classes/classes';
import Footer from './components/footer/footer';

//import router
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
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='studio' element={<Studio />} />
        <Route exact path='studio/:classes' element={<Classes />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='sign-up' element={<SignUp />} />
      </Routes>
      {/* Need to see if this is industry standard and style it */}
      <Footer />
    </Router>
  </div>
);

reportWebVitals();