import React from 'react';
import { 
    NavLink, 
    Outlet, 
    Link, 
    useParams
 } from 'react-router-dom';
 import Studio from '../studio/studio';

export default function Cover(props) {
    const coverImage = 
        <div className="Cover">
            <div className='Cover-Img'>
                <img src={props.imgLink} alt={props.imgAltText} />
            </div>
            <h1>Youth Dance | {props.pageName}</h1>
            <p>Learn to love dance with an fun, experienced teacher. The kids will all forms of dance and showcase their talent at the end of each semester.</p>
            <Link to=''>Sign up</Link>

            <Outlet />
        </div>
    
    return (
        <div>
            {coverImage}
        </div>
    );

  }