import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Cover from '../cover/cover';
import CoverImg from './hbo_westworld_tv_series_season_2_2018-wallpaper-3000x2000.jpg';

export default function Studio() {
    return (
        <div>
          <Cover 
            pageName='Studio'
            imgLink={CoverImg}
            imgAltText='what is this?'
          />
          <div className="studio">
            
          </div>
        </div>
      );
  }