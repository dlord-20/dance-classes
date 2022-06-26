import React from 'react';
import { NavLink, Outlet, Link, useParams } from 'react-router-dom';
import Cover from '../../cover/cover';
import Card from '../../../containers/card/card';
import Testimonials from '../../testimonials/testimonials';
import CoverImg from '../hbo_westworld_tv_series_season_2_2018-wallpaper-3000x2000.jpg'

export default function Classes() {
  const {classes} = useParams();
  var array = [0,1,2];
  if(classes === 'k1') {
    array = [1,2,3];
  } else if(classes === 'k2') {
    array = [0,2,3]
  } else if(classes === 'k3') {
    array = [0,1,3]
  }
  

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
        </div>
        <div className='cardComponent'>
          <Card 
            class={array[0]}
          />
          <Card 
            class={array[1]}
          />
          <Card 
            class={array[2]}
          />
        </div>
        <Testimonials currentClass={classes}/>
      </div>
    );
  }