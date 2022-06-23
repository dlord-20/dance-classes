import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';

//Components
import Cover from '../cover/cover';
import Card from '../../containers/card/card'

//Images
import CoverImg from './hbo_westworld_tv_series_season_2_2018-wallpaper-3000x2000.jpg';
import BoxOne from './96514.jpg';


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
          <div className='cardComponent'>
            <Card 
                imgSrc={BoxOne}
                imgAlt='Class one'
                startTime='Saturday 9:00 - 
                9:30 a.m.'
                h2='K1 Jazz'
                h5='Basic fundamentals'
                p='Learn to dance and more importantly learn to love it!'
                buttonLink=''
                buttonText='Check it out!'
                />
                <Card 
                imgSrc={BoxOne}
                imgAlt='Class two'
                startTime='Saturday 9:30 - 
                10:00 a.m.'
                h2='K2 Jazz'
                h5='Basic fundamentals +'
                p='Learn to dance and more importantly learn to love it!'
                buttonLink=''
                buttonText='Check it out!'
                />
                <Card 
                imgSrc={BoxOne}
                imgAlt='Class three'
                startTime='Saturday 10:00 - 
                10:30 a.m.'
                h2='K3 Jazz'
                h5='Basic fundamentals +'
                p='Learn to dance and more importantly learn to love it!'
                buttonLink=''
                buttonText='Check it out!'
                />
                <Card 
                imgSrc={BoxOne}
                imgAlt='Class four'
                startTime='Saturday 10:30 - 
                11:00 a.m.'
                h2='G1-G3 Jazz'
                h5='Basic fundamentals +'
                p='Learn to dance and more importantly learn to love it!'
                buttonLink=''
                buttonText='Check it out!'
                />
            </div>
        </div>
      );
  }