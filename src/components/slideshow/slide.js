import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Slide(props) {
    return (
        <div className="slide">
            <img src={props.image.img} alt={props.image.altImg} />
            <p>{props.image.altImg}</p>
        </div>
    );
  }