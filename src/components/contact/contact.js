import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Cover from '../cover/cover';

export default function Contact() {
    return (
        <div>
          <Cover 
            pageName='Contact'
            imgLink='#'
            imgAltText='what is this?'
          />
          <div className="contact">
            
          </div>
        </div>
      );
  }