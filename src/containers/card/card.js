import React from 'react';
import { Link } from 'react-router-dom';
import BoxOne from './96514.jpg';

export default function Card(props) {

    const classType = [{
        name: 'k1',
        subheading: 'Basic Fundamentals',
        description: 'Learn to dance and more importantly learn to love it!',
        imgSrc: BoxOne,
        imgAlt: 'Class One',
        startTime: 'Saturday 9:00 - 9:30 a.m.',
        buttonText: 'Let\'s get it'
        },
        {
        name: 'k2',
        subheading: 'Basic Fundamentals',
        description: 'Learn to dance and more importantly learn to love it!',
        imgSrc: BoxOne,
        imgAlt: 'Class One',
        startTime: 'Saturday 9:30 - 10:00 a.m.',
        buttonText: 'Check it out'
        },
        {
        name: 'k3',
        subheading: 'Basic Fundamentals',
        description: 'Learn to dance and more importantly learn to love it!',
        imgSrc: BoxOne,
        imgAlt: 'Class One',
        startTime: 'Saturday 10:00 - 10:30 a.m.',
        buttonText: 'Check it out'
        },
        {
        name: 'g1g3',
        subheading: 'Basic Fundamentals',
        description: 'Learn to dance and more importantly learn to love it!',
        imgSrc: BoxOne,
        imgAlt: 'Class One',
        startTime: 'Saturday 10:30 - 11:00 a.m.',
        buttonText: 'Got it'
        }]

        var index = '';
        if(props.class !== '') {
            index = parseInt(props.class, 10);
        } 

    return (
        <div>
          <div className="card">
                <Link to={'/studio/' + classType[index].name}>
                    <img src={classType[index].imgSrc} alt={classType[index].imgAlt}/>
                </Link>
                <div className='date'>
                    <p>{classType[index].startTime}</p>
                </div>
                <div className="boxText">
                    <h2>{classType[index].name}</h2>
                    <h5>{classType[index].subheading}</h5>
                    <p>{classType[index].description}</p>
                    <div className="buttons">
                        <Link className="buttonB lightBg" to={'/studio/' + classType[index].name}>{classType[index].buttonText} &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
      );
  }