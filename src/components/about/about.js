import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Cover from '../cover/cover';

export default function About() {
    return (
        <div>
          <Cover 
            pageName='About'
            imgLink='#'
            imgAltText='what is this?'
          />
          <div className="signUp">
            
          </div>
        </div>
      );
  }