import React from 'react';

export default function Card(props) {
    return (
        <div>
          <div className="card">
                <a href={props.buttonLink}>
                    <img src={props.imgSrc} alt={props.imgAlt}/>
                </a>
                <div className='date'>
                    <p>{props.startTime}</p>
                </div>
                <div className="boxText">
                    <h2>{props.h2}</h2>
                    <h5>{props.h5}</h5>
                    <p>{props.p}</p>
                    <div className="buttons">
                        <a className="buttonB lightBg" href={props.buttonLink}>{props.buttonText} &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
      );
  }