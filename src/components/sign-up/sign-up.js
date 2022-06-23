import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Cover from '../cover/cover';

export default function SignUp() {
    return (
      <div>
        <Cover 
          pageName='Sign-up'
          imgLink='#'
          imgAltText='what is this?'
        />
        <div className="sign-up">
          
        </div>
      </div>
    );
  }