import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import TestimonialObject from './testimonial-object';

export default function Testimony() {
    return (
        <div>
            <div className="testimony">
                <p>Dance with Nicole</p>
                <nav>
                    
                </nav>
            </div>
            <Outlet />
        </div>
    );
  }