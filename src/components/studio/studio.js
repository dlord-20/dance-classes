import React from 'react';
import { NavLink, Outlet, Link, useParams } from 'react-router-dom';

//Components
import Cover from '../cover/cover';
import Card from '../../containers/card/card'
import Testimonials from '../testimonials/testimonials';

//Images
import CoverImg from './hbo_westworld_tv_series_season_2_2018-wallpaper-3000x2000.jpg';


export default function Studio() {
    const {studio} = useParams();
    return (
        <div>
          <div>
            <Cover 
              pageName='Studio'
              imgLink={CoverImg}
              imgAltText='what is this?'
            />
          </div>
          <div className="studio">
            <h2>Check out some of our amazing classes</h2>
          </div>
          <div className='cardComponent'>
            <Card 
              class='0'
            />
            <Card 
              class='1'
            />
            <Card 
              class='2'
            />
            <Card 
              class='3'
            />

            </div>
            <Testimonials  currentClass={studio}/>
        </div>
      );
  }