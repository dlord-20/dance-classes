import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import TestimonialObject from './testimonial-object';
import Testimony from './testimony';

export default function Testimonials() {
    return (
        <div>
            <div className="testimonies">
                <div>
                    {/* Need to figure out how to make this dynamic according to page (k1 - only k1 testimonies or studio page - any testimony) */}
                    <Testimony />
                    <Testimony />
                    <Testimony />
                </div>
            </div>
            <Outlet />
        </div>
    );
  }