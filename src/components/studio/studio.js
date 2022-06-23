import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Cover from '../cover/cover';

export default function Studio() {
    return (
        <div>
          <Cover 
            pageName='Studio'
            imgLink='#'
            imgAltText='what is this?'
          />
          <div className="studio">
            
          </div>
        </div>
      );
  }