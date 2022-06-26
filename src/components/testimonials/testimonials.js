import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import danceClasses from './testimonial-object';
import Testimony from './testimony';

export default function Testimonials(props) {

    var filteredTestimonies = [];

    if(props.currentClass === 'k1' || props.currentClass === 'k2' || props.currentClass === 'k3' || props.currentClass === 'g1g3') {
        filteredTestimonies = danceClasses.filter(item => item.danceClassName === props.currentClass)
    } else {
        filteredTestimonies = danceClasses.map(item => item);
        console.log('here');
    }

    const display = filteredTestimonies.map(item => <Testimony testimony={item}/>)


    return (
        <div>
            <div className="testimonies">
                <div>
                    {display}
                </div>
            </div>
            <Outlet />
        </div>
    );
  }