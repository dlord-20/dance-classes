import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Cover from '../cover/cover';
import CoverImg from './Tiger.jpg';

export default function Contact() {
    return (
        <div>
          <Cover 
            pageName='Contact'
            imgLink={CoverImg}
            imgAltText='what is this?'
          />
          <div className="contact">
            
          </div>
        </div>
      );
  }