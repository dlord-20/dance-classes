import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
        <div className="Navigation">
            <p>Dance with Nicole</p>
            <nav>
                <ul>
                    <li><NavLink to='/studio'>Studio</NavLink></li>
                    <li><NavLink to='/about'>About the Teacher</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>

                </ul>
            </nav>
        </div>
        <Outlet />

        </div>
    );
  }