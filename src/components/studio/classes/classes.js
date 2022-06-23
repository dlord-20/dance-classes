import React from 'react';
import { NavLink, Outlet, Link, useParams } from 'react-router-dom';
import Cover from '../../cover/cover';
import CoverImg from '../hbo_westworld_tv_series_season_2_2018-wallpaper-3000x2000.jpg'

export default function Classes() {
  const {classes} = useParams();
  return (
      <div>
        <Cover 
          pageName='Studio'
          imgLink={CoverImg}
          imgAltText='what is this?'
        />
        <div className="classes">
          <img src='#' alt='#' />
          <h2><span>{classes}</span> Jazz</h2>
          <p>made it | {classes}</p>
        </div>
      </div>
    );
  }