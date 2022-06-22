import React from 'react';
import { 
    NavLink, 
    Outlet, 
    Link, 
    useParams
 } from 'react-router-dom';

export default function Cover() {
    const { cover } = useParams();
    return (
      <div className="Cover">
        <div className='Cover-Img'>
            <img src='#' alt='test' />
        </div>
        <h1>Youth Dance | {cover}</h1>
        <p>Learn to love dance with an fun, experienced teacher. The kids will all forms of dance and showcase their talent at the end of each semester.</p>
        <Link to=''>Sign up</Link>

        <Outlet />
      </div>
    );
  }