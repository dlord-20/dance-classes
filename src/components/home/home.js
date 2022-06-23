import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Cover from '../cover/cover';
import CoverImg from './96520.jpg';

export default function Home() {
    return (
    <div>
        <Cover 
            pageName='Home'
            imgLink={CoverImg}
            imgAltText='what is this?'
          />
        <div className="Home">
            <h1>KAUST's Kids Dance Classes</h1>
            <p>Learn to love dance with an fun, experienced teacher. The kids will all forms of dance and showcase their talent at the end of each semester.</p>
            <Link to=''>Sign up</Link>
        </div>
        <div>
            <h2>Can you believe this?</h2>
            <p>I totally figured out how to use React with React Router</p>
        </div>
    </div>
    );
  }