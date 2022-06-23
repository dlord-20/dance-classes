import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Cover from '../cover/cover';
import CoverImg from './Owl.jpg';

export default function About() {
    return (
        <div>
          <Cover 
            pageName='About'
            imgLink={CoverImg}
            imgAltText='what is this?'
          />
          <div className="about">
            
          </div>
        </div>
      );
  }