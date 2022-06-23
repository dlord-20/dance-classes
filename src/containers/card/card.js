import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import BoxOne from '../../components/studio/96514.jpg';

export default function Card(props) {

    const classes = [{
        name: 'k1',
        subheading: 'Basic Fundamentals',
        description: 'Learn to dance and more importantly learn to love it!',
        imgSrc: {BoxOne},
        imgAlt: 'Class One',
        startTime: 'Saturday 9:00 - 9:30 a.m.',
        buttonText: 'Check it out'
        },
        {
        name: 'k2',
        subheading: 'Basic Fundamentals',
        description: 'Learn to dance and more importantly learn to love it!',
        imgSrc: {BoxOne},
        imgAlt: 'Class One',
        startTime: 'Saturday 9:00 - 9:30 a.m.',
        buttonText: 'Check it out'
        },
        {
        name: 'k3',
        subheading: 'Basic Fundamentals',
        description: 'Learn to dance and more importantly learn to love it!',
        imgSrc: {BoxOne},
        imgAlt: 'Class One',
        startTime: 'Saturday 9:00 - 9:30 a.m.',
        buttonText: 'Check it out'
        },
        {
        name: 'g1g3',
        subheading: 'Basic Fundamentals',
        description: 'Learn to dance and more importantly learn to love it!',
        imgSrc: {BoxOne},
        imgAlt: 'Class One',
        startTime: 'Saturday 9:00 - 9:30 a.m.',
        buttonText: 'Check it out'
        }]


    return (
        <div>
          <div className="card">
                <Link to={classes[props.class].name}>
                    <img src={props.imgSrc} alt={props.imgAlt}/>
                </Link>
                <div className='date'>
                    <p>{props.startTime}</p>
                </div>
                <div className="boxText">
                    <h2>{props.h2}</h2>
                    <h5>{props.h5}</h5>
                    <p>{props.p}</p>
                    <div className="buttons">
                        <Link className="buttonB lightBg" to={props.buttonLink}>{props.buttonText} &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
      );
  }