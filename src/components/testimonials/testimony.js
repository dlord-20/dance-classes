import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Testimony(props) {
    const review = props.testimony;

    return (
        <div>
            <div className="testimony">
                <p>{review.testimony}</p>
                <p>- {review.name} ({review.wasStudent ? 'Student' : 'Parent'})</p>
                <p>Class: {review.danceClassName}</p>
                <p>Date: {review.date}</p>
                <p>Rating: {review.rating} Stars</p>
            </div>
        </div>
    );
  }