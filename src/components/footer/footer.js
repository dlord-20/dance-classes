import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <div className='container'>
                <div className="navigation">
                    <p>Dance with Nicole</p>
                    <nav>
                        <ul>
                            <li><NavLink to='/studio'>Studio</NavLink></li>
                            <li><NavLink to='/about'>About the Teacher</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                            <li className='sign-up'><NavLink to='/sign-up'>Signup</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
  }