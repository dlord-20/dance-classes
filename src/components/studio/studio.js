import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';

export default function Studio() {
    return (
      <div className="Studio">
        <div className='Cover-Img'>
            <img src='#' alt='test' />
        </div>
        <h1>Current Classes at KAUST | Studio</h1>
        <p>Learn to love dance with an fun, experienced teacher. The kids will all forms of dance and showcase their talent at the end of each semester.</p>
        <Link to=''>Sign up</Link>
      </div>
    );
  }